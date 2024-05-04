import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  removeTodo,
  toggleTodo,
  setNewTodo,
  setEditTodo,
  updateTodo,
} from '../../../redux/reducers/todosSlice';
import { RootState } from '../../../redux/store';
import { Button, Div, Input, Li, Span, Ul } from '../../common';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const newTodo = useSelector((state: RootState) => state.todos.newTodo);
  const editTodo = useSelector((state: RootState) => state.todos.editTodo);
  const editTodoId = useSelector((state: RootState) => state.todos.editTodoId);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
    }
  };

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleEditTodo = (id: string) => {
    const todo = todos[id];
    if (todo) {
      dispatch(setEditTodo({ id, text: todo.text }));
    }
  };

  const handleUpdateTodo = (id: string, text: string) => {
    dispatch(updateTodo({ id, text }));
  };

  const handleNewTodoChange = (value: string) => {
    dispatch(setNewTodo(value));
  };

  const handleEditTodoChange = (value: string) => {
    dispatch(setEditTodo({ id: editTodoId, text: value }));
  };

  const handleCancelEdit = () => {
    dispatch(setEditTodo({ id: '', text: '' }));
  };

  return (
    <Div>
      <h2>Home</h2>
      <Div>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => handleNewTodoChange(e.target.value)}
          placeholder="Add a new todo"
        />
        <Button onClick={handleAddTodo}>Add</Button>
      </Div>
      <Ul>
        {Object.entries(todos).map(([id, todo]) => (
          <Li key={id}>
            {editTodoId === id ? (
              <Div>
                <Input
                  type="text"
                  value={editTodo}
                  onChange={(e) => handleEditTodoChange(e.target.value)}
                />
                <Button onClick={() => handleUpdateTodo(id, editTodo)}>
                  Update
                </Button>
                <Button onClick={handleCancelEdit}>Cancel</Button>
              </Div>
            ) : (
              <Div>
                <Input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(id)}
                />
                <Span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                  }}
                >
                  {todo.text}
                </Span>
                <Button onClick={() => handleRemoveTodo(id)}>Remove</Button>
                <Button onClick={() => handleEditTodo(id)}>Edit</Button>
              </Div>
            )}
          </Li>
        ))}
      </Ul>
    </Div>
  );
};

export default Home;