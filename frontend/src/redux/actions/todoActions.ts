import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction<string>('ADD_TODO');
export const removeTodo = createAction<string>('REMOVE_TODO');
export const updateTodo = createAction<{ id: string; text: string }>('UPDATE_TODO');
export const setNewTodo = createAction<string>('SET_NEW_TODO');
export const setEditTodo = createAction<{ id: string; text: string }>('SET_EDIT_TODO');
export const clearEditTodo = createAction('CLEAR_EDIT_TODO');

