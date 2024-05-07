import React from "react";
import { Div } from "../../common";
import "./auth.css";
import AuthorizationForm from "../../forms/auth/AuthorizationForm";

const Profile: React.FC = () => {
  return (
    <Div>
      <AuthorizationForm />
    </Div>
  );
};

export default Profile;
