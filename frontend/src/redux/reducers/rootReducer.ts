import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import profileReducer from './profilesSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  profiles: profileReducer,
});

export default rootReducer;



