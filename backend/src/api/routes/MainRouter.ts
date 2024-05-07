import express from 'express';
import ApplicationRoutes  from './ApplicationRoutes';
import CertificationRouter from './CertificationRouter';
import EducationRouter from './EducationRouter';
import ExperienceRouter from './ExperienceRouter';
import LanguageRouter from './LanguageRouter';
import LocationRouter from './LocationRouter';
import NotificationTypeRouter from './NotificationTypeRouter';
import MatchRouter from './MatchesRouter';
import NotificationRouter from './NotificationsRouter';
import ResumeRouter from './ResumesRouter';
import ResumeSkillsRouter from './ResumeSkillsRouter';
import SkillRouter from './SkillRouter';
import UserRouter from './UserRouter';
import VacancyRouter from './VacancyRouter';
import VacancySkillsRouter from './VacancySkillsRouter';


const MainRouter = express.Router();

MainRouter.use('/matches', MatchRouter);
MainRouter.use('/notifications', NotificationRouter);
MainRouter.use('/resumes', ResumeRouter);
MainRouter.use('/resume_skills', ResumeSkillsRouter);
MainRouter.use('/skills', SkillRouter);
MainRouter.use('/users', UserRouter);
MainRouter.use('/vacancies', VacancyRouter);
MainRouter.use('/vacancy_skills', VacancySkillsRouter);
MainRouter.use('/applications', ApplicationRoutes);
MainRouter.use('/languages', LanguageRouter);
MainRouter.use('/educations', EducationRouter);
MainRouter.use('/experiences', ExperienceRouter);
MainRouter.use('/locations', LocationRouter);
MainRouter.use('/notification_types', NotificationTypeRouter);
MainRouter.use('/certifications', CertificationRouter);




export default MainRouter;

