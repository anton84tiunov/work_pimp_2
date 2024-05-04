import React, { useState } from "react";
import { Table, Caption, Tr, Td, Span, Input, Button, Div } from "../../common";
import { addProfile } from "../../../redux/reducers/profilesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Tbody from "../../common/table/tbody/Tbody";
import axios from "axios";

const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const newProfile = useSelector(
    (state: RootState) => state.profiles.newProfile
  );

  const handleAddProfile = async () => {
    // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;&& emailRegex.test(email)
    if (name && surname && email && password) {
      const updatedProfile = {
        ...newProfile,
        name,
        surname,
        email,
        password,
      };

      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/create",
          {
            name: name,
            surname: surname,
            email: email,
            password: password,
          }
        );

        console.log("Profile added:", response.data);
      } catch (error: any) {
        // Приводим тип error к типу Error, чтобы избежать ошибки компиляции
        const typedError = error as Error;

        // Теперь можно обращаться к свойствам типа Error без ошибок компиляции
        console.log(typedError.message);
        console.log(typedError.stack);
        // Другие действия с объектом типа Error
      }
      dispatch(addProfile(updatedProfile));
      // setName("");
      // setSurname("");
      // setEmail("");
      // setPassword("");
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
