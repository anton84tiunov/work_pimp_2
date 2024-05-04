#!/bin/bash

# Функция для определения текущей раскладки клавиатуры
get_current_layout() {
    layout=$(setxkbmap -query | awk '/layout/ {print $2}')
    echo "$layout"
}

# Функция для временного переключения на английскую раскладку клавиатуры
switch_to_english_layout() {
    setxkbmap us
}

# Функция для возврата к предыдущей раскладке клавиатуры
restore_previous_layout() {
    setxkbmap "$1"
}

# Функция для выполнения команды в новом терминале VSCode
execute_command_in_vscode_terminal() {
    local command=$1
    xdotool type "$command"
    xdotool key Return
}

# Определяем текущую раскладку
current_layout=$(get_current_layout)
echo "Текущая раскладка: $current_layout"

# Если текущая раскладка не является английской, временно переключаемся на английскую раскладку
if [ "$current_layout" != "us" ]; then
    switch_to_english_layout
    switched_layout=true
fi

sleep 1

# Отправляем комбинацию клавиш Ctrl+Shift+`
xdotool key ctrl+shift+grave
sleep 1
# Выполняем команду в новом терминале
execute_command_in_vscode_terminal "cd ./backend && npm run start-ts"



# Отправляем комбинацию клавиш Ctrl+Shift+`
xdotool key ctrl+shift+grave
sleep 1
# Выполняем команду в новом терминале
execute_command_in_vscode_terminal "cd ./frontend && npm start"


# Если произошло временное изменение раскладки, возвращаемся к предыдущей раскладке
if [ "$switched_layout" = true ]; then
    restore_previous_layout "$current_layout"
    echo "Возвращена предыдущая раскладка: $current_layout"
fi