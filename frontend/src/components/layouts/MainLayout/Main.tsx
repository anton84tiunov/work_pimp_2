import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile/Profile';
import TodoList from '../../pages/TodoList';

const Main: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </main>
  );
};

export default Main;