import React, { useState } from "react";
import {
  Tbody,
  Table,
  Caption,
  Tr,
  Td,
  Span,
  Input,
  Button,
  Div,
} from "../../common";
import axios from "axios";

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAddProfile = async () => {
    if (name && surname && email && password) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/create",
          {
            name,
            surname,
            email,
            password,
          }
        );
        const userData = {
          name,
          surname,
          email,
          password,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log("Profile added:", response.data);
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const setLocalUser = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    alert("Данные сохранены в localStorage");
  };

  const getLocalUser = () => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Доступ к свойствам данных пользователя
      console.log("Имя:", userData.name);
      console.log("Фамилия:", userData.surname);
      console.log("Электронная почта:", userData.email);
      console.log("Пароль:", userData.password);
    }
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
              <Span>name</Span>
            </Td>
            <Td>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
              />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Span>surname</Span>
            </Td>
            <Td>
              <Input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="surname"
              />
            </Td>
          </Tr>
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
      <Button onClick={handleAddProfile}>submit</Button>
      <br />
      <Button onClick={setLocalUser}>Set Local User</Button>
      <br />
      <Button onClick={getLocalUser}>Get Local User</Button>
      <br />
      <Button onClick={() => localStorage.clear()}>Clear Local Storage</Button>
    </Div>
  );
};

export default RegistrationForm;
