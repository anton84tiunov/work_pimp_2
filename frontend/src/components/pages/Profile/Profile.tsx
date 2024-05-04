import React, { useEffect } from "react";
import {
  Button,
  Caption,
  Div,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
} from "../../common";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../redux/reducers/profilesSlice";
import { RootState } from "../../../redux/store";
import "./profile.css";
import RegistrationForm from "../../forms/auth/RegistrationForm";
import GetUsers from "../../forms/auth/GetUsers";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state: RootState) => state.profiles.profiles);
  const isLoading = useSelector((state: RootState) => state.profiles.isLoading);

  const handleEditProfile = (
    field: string,
    value: string | number,
    profileId: string
  ) => {
    const profile = profiles.find((p) => p.id === profileId);
    if (profile) {
      const updatedProfile = { ...profile };
      switch (field) {
        case "name":
          updatedProfile.name = String(value);
          break;
        case "surname":
          updatedProfile.surname = String(value);
          break;
        case "email":
          updatedProfile.email = String(value);
          break;
        case "password":
          updatedProfile.password = String(value);
          break;
        default:
          break;
      }
      dispatch(updateProfile(updatedProfile));
    }
  };

  // const [count, setCount] = useState(0);

  // Используем useEffect с массивом зависимостей
  // useEffect(() => {
  //   GetUsers(dispatch);
  //   // Здесь можно выполнять действия, которые должны происходить только при изменении определенных переменных
  // }, [dispatch]);

  useEffect(() => {
    GetUsers(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <div>Загрузка данных...</div>;
  }
  // useEffect(() => {
  //   GetUsers(dispatch);
  // }, [dispatch]);

  return (
    <Div>
      <RegistrationForm />
      <Table>
        <Caption>
          <h2>Список профилей</h2>
        </Caption>

        <Tbody>
          <Tr>
            <Th>id</Th>
            <Th>name</Th>
            <Th>surname</Th>
            <Th>email</Th>
            <Th>password</Th>
          </Tr>
          {Object.entries(profiles).map(([id, profile]) => (
            <Tr key={id}>
              <Td>{profile.id}</Td>
              <Td>
                <Input
                  onChange={(e) =>
                    handleEditProfile("name", e.target.value, profile.id)
                  }
                  type="text"
                  value={profile.name}
                />
              </Td>
              <Td>
                <Input
                  onChange={(e) =>
                    handleEditProfile("surname", e.target.value, profile.id)
                  }
                  type="text"
                  value={profile.surname}
                />
              </Td>
              <Td>
                <Input
                  onChange={(e) =>
                    handleEditProfile("email", e.target.value, profile.id)
                  }
                  type="text"
                  value={profile.email}
                />
              </Td>
              <Td>
                <Input
                  onChange={(e) =>
                    handleEditProfile("password", e.target.value, profile.id)
                  }
                  type="text"
                  value={profile.password}
                />
              </Td>
              <Td>
                <Button onClick={() => console.log("Edit")}>
                  <AiOutlineCheck />
                </Button>
              </Td>
              <Td>
                <Button onClick={() => console.log("Remove")}>
                  <AiOutlineClose />
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Div>
  );
};

export default Profile;
