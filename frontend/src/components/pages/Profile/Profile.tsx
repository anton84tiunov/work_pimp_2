import React from "react";
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

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state: RootState) => state.profiles.profiles);

  const handleEditProfile = (
    field: string,
    value: string | number,
    profileId: string
  ) => {
    const profile = profiles[profileId];
    if (profile) {
      const updatedProfile = { ...profile };
      switch (field) {
        case "name":
          updatedProfile.name = String(value);
          break;
        case "age":
          updatedProfile.age = Number(value);
          break;
        case "email":
          updatedProfile.email = String(value);
          break;
        case "phone":
          updatedProfile.phone = Number(value);
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
            <Th>age</Th>
            <Th>email</Th>
            <Th>phone</Th>
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
                    handleEditProfile("age", e.target.value, profile.id)
                  }
                  type="number"
                  value={profile.age}
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
                    handleEditProfile("phone", e.target.value, profile.id)
                  }
                  type="number"
                  value={profile.phone}
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
