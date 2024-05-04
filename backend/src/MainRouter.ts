import express from 'express';
import ApplicationRoutes  from './api/routes/ApplicationRoutes';
import CertificationRouter from './api/routes/CertificationRouter';
import EducationRouter from './api/routes/EducationRouter';
import ExperienceRouter from './api/routes/ExperienceRouter';
import LanguageRouter from './api/routes/LanguageRouter';
import LocationRouter from './api/routes/LocationRouter';
import NotificationTypeRouter from './api/routes/NotificationTypeRouter';
import MatchRouter from './api/routes/MatchesRouter';
import NotificationRouter from './api/routes/NotificationsRouter';
import ResumeRouter from './api/routes/ResumesRouter';
import ResumeSkillsRouter from './api/routes/ResumeSkillsRouter';
import SkillRouter from './api/routes/SkillRouter';
import UserRouter from './api/routes/UserRouter';
import VacancyRouter from './api/routes/VacancyRouter';
import VacancySkillsRouter from './api/routes/VacancySkillsRouter';


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

