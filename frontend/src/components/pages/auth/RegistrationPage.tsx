import React from "react";
import { Div } from "../../common";
import "./auth.css";
import RegistrationForm from "../../forms/auth/RegistrationForm";

const RegistrationPage: React.FC = () => {
  return (
    <Div>
      <RegistrationForm />
    </Div>
  );
};

export default RegistrationPage;
