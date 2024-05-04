import React, { useState } from "react";
import { Table, Caption, Tr, Td, Span, Input, Button, Div } from "../../common";
import { addProfile } from "../../../redux/reducers/profilesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Tbody from "../../common/table/tbody/Tbody";

const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");

  const newProfile = useSelector(
    (state: RootState) => state.profiles.newProfile
  );

  const handleAddProfile = () => {
    // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;&& emailRegex.test(email)
    if (name && age && email && phone && password) {
      const updatedProfile = {
        ...newProfile,
        name,
        age,
        email,
        phone,
        password,
      };
      dispatch(addProfile(updatedProfile));
      setName("");
      setAge(0);
      setEmail("");
      setPhone(0);
      setPassword("");
      // setEmailError("");
      // } else if (!emailRegex.test(email)) {
      //   setEmailError('Неверный формат электронной почты');
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
              <Span>age</Span>
            </Td>
            <Td>
              <Input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="age"
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
              <Span>phone</Span>
            </Td>
            <Td>
              <Input
                type="number"
                value={phone}
                onChange={(e) => setPhone(Number(e.target.value))}
                placeholder="phone"
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
      <Button onClick={handleAddProfile}>Add</Button>
    </Div>
  );
};

export default RegistrationForm;
