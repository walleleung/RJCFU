import {Role} from './role';

export interface User {
  userId: string;
  realName: string;
  roles: Array<Role>;
}
