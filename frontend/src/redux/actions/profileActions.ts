import { createAction } from '@reduxjs/toolkit';

export const addProfile = createAction<{
    id: string;
    name: string;
    age: number;
    email: string;
    phone: number;
    password: string;
    completed: boolean;
}>('ADD_PROFILE');
export const removeProfile = createAction<string>('REMOVE_PROFILE');
export const selectProfile = createAction<{
    id: string;
    name: string;
    age: number;
    email: string;
    phone: number;
    password: string;
    completed: boolean;
}>('SELECT_PROFILE');

export const updateProfile = createAction<{
    id: string;
    name?: string;
    age?: number;
    email?: string;
    phone?: number;
    password?: string;
    completed?: boolean;
}>('UPDATE_PROFILE');