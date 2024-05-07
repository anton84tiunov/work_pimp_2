import React, { useState } from "react";
import {
  Button,
  Caption,
  Div,
  Input,
  Span,
  Table,
  Tbody,
  Td,
  Tr,
} from "../../common";
import axios from "axios";

const AuthorizationForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthorization = async () => {
    if (email && password) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/authorize",
          {
            email,
            password,
          }
        );
        // const userData = {
        //   email,
        //   password,
        // };
        // localStorage.Authorization("userData", JSON.stringify(userData));
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("email", response.data.email);
        console.log("auth:", response.data);
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const getLocalToken = () => {
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("refreshToken"));
    console.log(localStorage.getItem("email"));
  };

  return (
    <Div>
      <Table>
        <Caption>
          <h2>Форма дрбавления профиля</h2>
        </Caption>
        <Tbody>
          <Tr>
            <Td>
              <Span>email</Span>
            </Td>
            <Td>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Span>password</Span>
            </Td>
            <Td>
              <Input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Button onClick={handleAuthorization}>submit</Button>
      <br />
      <Button onClick={getLocalToken}>Get Local Token</Button>
      <br />
      <Button onClick={() => localStorage.clear()}>Clear Local Storage</Button>
    </Div>
  );
};

export default AuthorizationForm;
