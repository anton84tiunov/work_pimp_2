import { createAction } from '@reduxjs/toolkit';

export const addProfile = createAction<{
    id: number; // Изменение типа id на number
    name: string;
    surname: string;
    email: string;
    password: string;
    completed: boolean;
  }>('ADD_PROFILE');
export const removeProfile = createAction<string>('REMOVE_PROFILE');
export const selectProfile = createAction<{
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    completed: boolean;
}>('SELECT_PROFILE');

export const updateProfile = createAction<{
    id: number;
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
    completed?: boolean;
}>('UPDATE_PROFILE');



