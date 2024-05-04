export interface ProfileInterfase {
    id: string; 
    name: string;
    surname: string;
    email: string;
    password: string;
    completed: boolean;
  }
  // @PrimaryGeneratedColumn()
  //   user_id: number;

    
  //   @Column({ length: 100 , unique: true})
  //   email: string;

  //   @Column({ length: 100 })
  //   password: string;

  //   @OneToMany(() => ResumeEntity, resume => resume.user)
  //   resumes: ResumeEntity[];

  //   @ManyToMany(() => SkillEntity)
  //   @JoinTable()
  //   skills: SkillEntity[];

  //   @OneToMany(() => VacancyEntity, vacancy => vacancy.user)
  //   vacancies: VacancyEntity[];

  //   @OneToMany(() => NotificationEntity, notification => notification.user)
  //   notifications: NotificationEntity[];

  //   @OneToOne(() => LocationEntity)
  //   @JoinColumn()
  //   location: LocationEntity;

  //   @OneToOne(() => EducationEntity)
  //   @JoinColumn()
  //   education: EducationEntity;

  //   @OneToOne(() => ExperienceEntity)
  //   @JoinColumn()
  //   experience: ExperienceEntity;

  //   @ManyToMany(() => LanguageEntity)
  //   @JoinTable()
  //   languages: LanguageEntity[];

  //   @OneToMany(() => CertificationEntity, certification => certification.user)
  //   certifications: CertificationEntity[];

  //   @OneToMany(() => ApplicationEntity, application => application.user)
  //   applications: ApplicationEntity[];