
import os

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
                if item in exclude_dirs:
                    continue
                structure_description.append(f"{prefix}├── {item}/")
                describe_directory(item_path, prefix + ("│   " if not is_last else "    "))
            elif os.path.isfile(item_path):
                if item_path in exclude_files:
                    continue
                structure_description.append(f"{prefix}├── {item}")

    structure_description.append(f"{os.path.basename(root_dir)}/")
    describe_directory(root_dir)

    return "\n".join(structure_description)

def create_project_snapshot(root_dir, output_file, exclude_dirs=None, exclude_files=None):
    if exclude_dirs is None:
        exclude_dirs = set()
    if exclude_files is None:
        exclude_files = set()

    with open(output_file, 'w', encoding='utf-8') as f:
        project_structure_description = describe_project_structure(root_dir, exclude_dirs, exclude_files)
        f.write(f"Project Structure:\n{project_structure_description}\n\n")

if __name__ == "__main__":
    root_directory = "."
    output_filename = "../PYTHON_SCRIPTS/project_snapshot.txt"

    exclude_dirs = {".git", "node_modules", "tests", "bin", "logs"}
    exclude_files = {os.path.join(root_directory, ".gitignore"), os.path.join(root_directory, ".DS_Store"), os.path.join(root_directory, "package-lock.json"), os.path.join(root_directory, "project_structure.txt")}

    create_project_snapshot(root_directory, output_filename, exclude_dirs, exclude_files)