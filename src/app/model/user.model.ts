import {RoleModel} from './role.model';

export interface UserModel {
  userId: string;
  realName: string;
  roles: Array<RoleModel>;
}
