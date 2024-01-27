
import { Education, PersonalInfor,Certificate, Project, Award, Experience } from ".";

export interface ChangePersonalInforPayload {
    key: keyof PersonalInfor;
    value: string;
  }

  export interface ChangeEducationPayload {
    key: keyof Education;
    value: string ;
    index: number;
  }

  export interface ChangeCertificatePayload {
    key: keyof Certificate;
    value: string;
    index: number;
  }

  export interface ChangeProjectPayload {
    key: keyof Project;
    value: string;
    index: number;
  }

  export interface RemoveProjectAchive {
    index: number;
    achiveIndex: number;
  }

  export interface ChangeProjectAchive{
    index: number;
    achiveIndex: number;
    value: string;
  }

  export interface ChangeAwardPayload {
    index: number;
    key: keyof Award;
    value: string;
  }

  export interface ChangeExperiencePayload {
    index: number;
    key: keyof Experience;
    value: string;
  }