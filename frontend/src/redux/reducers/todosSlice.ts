import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Определение интерфейса для Todo
interface Todo {
  text: string; // Текст задачи
  completed: boolean; // Статус выполнения задачи
}

// Определение интерфейса для состояния слайса Todo
interface TodoState {
  todos: { [id: string]: Todo }; // Объект, содержащий задачи, где ключ - это идентификатор задачи
  newTodo: string; // Текст новой задачи
  editTodo: string; // Текст редактируемой задачи
  editTodoId: string; // Идентификатор редактируемой задачи
}

// Определение начального состояния для слайса Todo
const initialState: TodoState = {
  todos: {}, // Изначально нет задач
  newTodo: '', // Изначально нет текста для новой задачи
  editTodo: '', // Изначально нет редактируемой задачи
  editTodoId: '', // Изначально нет идентификатора редактируемой задачи
};

// Создание слайса Todo с использованием createSlice из Redux Toolkit
const todoSlice = createSlice({
  name: 'todos', // Имя слайса
  initialState, // Начальное состояние слайса
  reducers: {
    // Редьюсер для добавления новой задачи
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = action.payload; // Получение текста новой задачи из payload действия
      const id = Date.now().toString(); // Генерация уникального идентификатора для новой задачи
      state.todos[id] = { text: newTodo, completed: false }; // Добавление новой задачи в объект todos
      state.newTodo = ''; // Очистка состояния newTodo
      console.log("Added to todo: " + id.toString() + " " + state.todos[id].text + " " + state.todos[id].completed);
    },
    // Редьюсер для удаления задачи
    removeTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload; // Получение идентификатора задачи для удаления из payload действия
      console.log("Removed from todo: " + id.toString() + " " + state.todos[id].text + " " + state.todos[id].completed);
      delete state.todos[id]; // Удаление задачи из объекта todos
    },
    // Редьюсер для обновления задачи
    updateTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = action.payload; // Получение идентификатора и нового текста задачи из payload действия
      state.todos[id] = { ...state.todos[id], text }; // Обновление текста задачи в объекте todos
      state.editTodo = ''; // Очистка состояния editTodo
      state.editTodoId = ''; // Очистка состояния editTodoId
      console.log("Updated todo: " + id.toString() + " " + state.todos[id].text + " " + state.todos[id].completed);
    },
    // Редьюсер для установки текста новой задачи
    setNewTodo: (state, action: PayloadAction<string>) => {
      state.newTodo = action.payload; // Установка состояния newTodo на текст новой задачи из payload действия
    },
    // Редьюсер для установки редактируемой задачи
    setEditTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = action.payload; // Получение идентификатора и текста редактируемой задачи из payload действия
      state.editTodo = text; // Установка состояния editTodo на текст редактируемой задачи
      state.editTodoId = id; // Установка состояния editTodoId на идентификатор редактируемой задачи
      console.log("Set edit todo: " + id.toString() + " " + state.todos[id].text + " " + state.todos[id].completed);
    },
    // Редьюсер для очистки редактируемой задачи
    clearEditTodo: (state) => {
      state.editTodo = ''; // Очистка состояния editTodo
      state.editTodoId = ''; // Очистка состояния editTodoId
      console.log("Cleared edit todo: " + state.editTodoId.toString() + " " + state.todos[state.editTodoId].text + " " + state.todos[state.editTodoId].completed);
    },
    // Редьюсер для переключения статуса выполнения задачи
    toggleTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload; // Получение идентификатора задачи для переключения статуса из payload действия
      const todo = state.todos[id]; // Получение объекта задачи из объекта todos
      if (todo) {
        state.todos[id] = { ...todo, completed: !todo.completed }; // Переключение статуса выполнения задачи
      }
      console.log("Toggled todo: " + id.toString() + " " + state.todos[id].text + " " + state.todos[id].completed);
    },
  },
});

// Экспорт создателей действий для слайса Todo
export const { addTodo, removeTodo, updateTodo, setNewTodo, setEditTodo, clearEditTodo, toggleTodo } = todoSlice.actions;

// Экспорт редьюсера для слайса Todo
export default todoSlice.reducer;