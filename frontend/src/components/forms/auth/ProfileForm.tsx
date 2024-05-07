import React, { useState } from "react";
import { Table, Caption, Tr, Td, Span, Input, Button, Div } from "../../common";
import { addProfile } from "../../../redux/reducers/profilesSlice";
import { useDispatch } from "react-redux";
// import { RootState } from "../../../redux/store";
import Tbody from "../../common/table/tbody/Tbody";
import axiosInstance from "../../../services/axios/axios";

const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAddProfile = async () => {
    if (name && surname && email && password) {
      try {
        const response = await axiosInstance.post("users/create", {
          name,
          surname,
          email,
          password,
        });

        const { user_id } = response.data; // Получение id из ответа сервера

        const updatedProfile = {
          user_id,
          name,
          surname,
          email,
          password,
          completed: false,
        };

        dispatch(addProfile(updatedProfile));
        console.log("Profile added:", response.data);
      } catch (error: any) {
        // Обработка ошибки
      }
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
      <Button onClick={handleAddProfile}>Add</Button>
    </Div>
  );
};

export default RegistrationForm;

// @PrimaryGeneratedColumn()
//     user_id: number;

//     @Column({ length: 100 , unique: true})
//     email: string;

//     @Column({ length: 100 })
//     password: string;

//     @OneToMany(() => ResumeEntity, resume => resume.user)
//     resumes: ResumeEntity[];

//     @ManyToMany(() => SkillEntity)
//     @JoinTable()
//     skills: SkillEntity[];

//     @OneToMany(() => VacancyEntity, vacancy => vacancy.user)
//     vacancies: VacancyEntity[];

//     @OneToMany(() => NotificationEntity, notification => notification.user)
//     notifications: NotificationEntity[];

//     @OneToOne(() => LocationEntity)
//     @JoinColumn()
//     location: LocationEntity;

//     @OneToOne(() => EducationEntity)
//     @JoinColumn()
//     education: EducationEntity;

//     @OneToOne(() => ExperienceEntity)
//     @JoinColumn()
//     experience: ExperienceEntity;

//     @ManyToMany(() => LanguageEntity)
//     @JoinTable()
//     languages: LanguageEntity[];

//     @OneToMany(() => CertificationEntity, certification => certification.user)
//     certifications: CertificationEntity[];

//     @OneToMany(() => ApplicationEntity, application => application.user)
//     applications: ApplicationEntity[];

// frontend/src/components/forms/auth/RegistrationForm.tsx
// frontend/src/components/forms/auth/GetUsers.ts
// frontend/src/types/Profile.ts
// frontend/src/components/pages/Profile/Profile.tsx
// frontend/src/redux/actions/profileActions.ts
// frontend/src/redux/reducers/profilesSlice.ts
// frontend/src/redux/store.ts
