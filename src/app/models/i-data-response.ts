import { Student } from './Student';
import { Professor } from './Professor';

export interface IDataResponse {
  success: boolean;
  title: string;
  message: string;
  error?: Error;
}

export interface IStudentResponse extends IDataResponse {
  response?: Student;
}

export interface IProfessorResponse extends IDataResponse {
  response?: Professor;
}
export interface ILoginResponse extends IDataResponse {
  response?: Student | Professor;
  authToken?: string;
}

export interface IRegisterResponse extends IDataResponse {
  response?: Student;
}
