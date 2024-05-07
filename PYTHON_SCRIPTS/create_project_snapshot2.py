import os
import re

def describe_project_structure(root_dir, exclude_dirs=None, exclude_files=None):
    if exclude_dirs is None:
        exclude_dirs = set()
    if exclude_files is None:
        exclude_files = set()

    structure_description = []

    def describe_directory(directory, prefix=''):
        items = os.listdir(directory)
        items.sort()

        for index, item in enumerate(items):
            item_path = os.path.join(directory, item)
            is_last = index == len(items) - 1

            if os.path.isdir(item_path):
                if item in exclude_dirs or any(os.path.commonprefix([item_path, exclude_dir]) == exclude_dir for exclude_dir in exclude_dirs):
                    continue
                structure_description.append(f"{prefix}├── {item}/")
                describe_directory(item_path, prefix + ("│   " if not is_last else "    "))
            elif os.path.isfile(item_path):
                if item_path in exclude_files:
                    continue
                structure_description.append(f"{prefix}├── {item}")

    structure_description.append(f"{os.path.basename(root_dir)}/")
    describe_directory(root_dir)

    return structure_description

def remove_comments(content, file_extension):
    if file_extension == '.py':
        # Удаление однострочных комментариев в Python
        content = re.sub(r'#.*?\n', '\n', content)
        # Удаление многострочных комментариев в Python
        content = re.sub(r'""".*?"""', '', content, flags=re.DOTALL)
        content = re.sub(r"'''.*?'''", '', content, flags=re.DOTALL)
    elif file_extension in ['.js', '.ts']:
        # Удаление однострочных комментариев в JavaScript/TypeScript
        content = re.sub(r'//.*?\n', '\n', content)
        # Удаление многострочных комментариев в JavaScript/TypeScript
        content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    elif file_extension in ['.html', '.css']:
        # Удаление комментариев в HTML/CSS
        content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
    elif file_extension == '.java':
        # Удаление однострочных комментариев в Java
        content = re.sub(r'//.*?\n', '\n', content)
        # Удаление многострочных комментариев в Java
        content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    return content

def remove_extra_newlines(content):
    # Удаляем последовательности из трех или более пустых строк
    content = re.sub(r'\n\n\n+', '\n\n', content)

    # Удаляем строки, содержащие только пробелы, символы табуляции или их комбинацию
    content = re.sub(r'^\s+$\n', '', content, flags=re.MULTILINE)

    return content

def create_project_snapshot(root_dir, output_file, exclude_dirs=None, exclude_files=None, include_comments=False):
    if exclude_dirs is None:
        exclude_dirs = set()
    if exclude_files is None:
        exclude_files = set()

    with open(output_file, 'w', encoding='utf-8') as f:
        project_structure_description = describe_project_structure(root_dir, exclude_dirs, exclude_files)
        f.write("Project Structure:\n")
        f.write("\n".join(project_structure_description))
        f.write("\n\n")

        all_files = []
        for root, dirs, files in os.walk(root_dir):
            dirs[:] = [d for d in dirs if not any(os.path.commonprefix([os.path.join(root, d), exclude_dir]) == exclude_dir for exclude_dir in exclude_dirs)]
            for file in files:
                file_path = os.path.join(root, file)
                if any(os.path.commonprefix([file_path, exclude_dir]) == exclude_dir for exclude_dir in exclude_dirs):
                    continue
                all_files.append(file_path)

        for file_path in all_files:
            relative_path = os.path.relpath(file_path, root_dir)
            f.write(f"File: {relative_path}\n")
            with open(file_path, 'r', encoding='utf-8', errors='replace') as file:
                content = file.read()
                file_extension = os.path.splitext(file_path)[1].lower()
                if not include_comments:
                    content = remove_comments(content, file_extension)
                content = remove_extra_newlines(content)
                f.write(content)
                f.write("\n\n")

if __name__ == "__main__":
    root_directory = "backend/src/"
    output_filename = "./PYTHON_SCRIPTS/project_snapshot2.txt"

    exclude_dirs = {".git", "node_modules", "tests", "bin", "logs"}
    exclude_files = {os.path.join(root_directory, ".gitignore"), os.path.join(root_directory, ".DS_Store"), os.path.join(root_directory, "package-lock.json"), os.path.join(root_directory, "project_structure.txt"), "logo.svg"}
    create_project_snapshot(root_directory, output_filename, exclude_dirs, exclude_files, include_comments=False)