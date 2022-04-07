import 'little-state-machine';
import { IFormData } from '../pages/_app';

export interface IFormData {
    firstName: string;
    lastName: string;
    age: string;
    yearsOfExp: string;
  }

declare module 'little-state-machine' {
  interface GlobalState {
    data: IFormData;
  }
}