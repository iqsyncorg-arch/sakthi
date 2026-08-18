import { enCommon } from "./common";
import {
  enAbout,
  enAdmissions,
  enCareers,
  enContact,
  enCourses,
  enEmployment,
  enGallery,
  enHome,
  enStudentLife,
} from "./pages";
import { enAlerts, enServices, enTests } from "./services";
import {
  enAboutBody,
  enAdmissionsBody,
  enCareerCounselingBody,
  enCareersBody,
  enContactBody,
  enCoursesBody,
  enEmploymentBody,
  enHomeBody,
  enStudentLifeMoments,
  enTestsBody,
  enTravelBody,
  enVisaBody,
} from "./body";

export const en = {
  ...enCommon,
  home: enHome,
  about: enAbout,
  admissions: enAdmissions,
  studentLife: enStudentLife,
  employment: enEmployment,
  careers: enCareers,
  gallery: enGallery,
  contact: enContact,
  courses: enCourses,
  tests: enTests,
  services: enServices,
  alerts: enAlerts,
  employmentBody: enEmploymentBody,
  admissionsBody: enAdmissionsBody,
  homeBody: enHomeBody,
  studentLifeMoments: enStudentLifeMoments,
  coursesBody: enCoursesBody,
  careersBody: enCareersBody,
  contactBody: enContactBody,
  aboutBody: enAboutBody,
  visaBody: enVisaBody,
  travelBody: enTravelBody,
  careerCounselingBody: enCareerCounselingBody,
  testsBody: enTestsBody,
} as const;

export type Messages = typeof en;
