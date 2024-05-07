import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile/Profile";
import TodoList from "../../pages/TodoList";
import RegistrationPage from "../../pages/auth/RegistrationPage";
import AuthorizationPage from "../../pages/auth/AuthorizationPage";

const Main: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/authorize" element={<AuthorizationPage />} />
      </Routes>
    </main>
  );
};

export default Main;
