import {Injectable} from '@angular/core';
import {MenuItemModel} from '../model/menu.item.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginModel} from '../model/login.model';
import {UserTokenModel} from '../model/user.token.model';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  private readonly menuItems: Array<MenuItemModel> = [
    {menuName: '首页', iconName: 'home', path: ''},
    {menuName: '搜索', iconName: 'search', path: '/search'},
    {menuName: '患者管理', iconName: 'team', path: '/patient'},
    {menuName: '随访管理', iconName: 'schedule', path: '/followup'},
    {menuName: '数据集', iconName: 'database', path: '/dataset'},
    {menuName: '表单设计', iconName: 'ant-design', path: '/design'},
    {menuName: '系统设置', iconName: 'setting', path: '/system'},
    {menuName: '数据导出', iconName: 'export', path: '/export'}
  ];

  constructor(private _httpClient: HttpClient) {
  }

  login(loginUser: LoginModel): Observable<boolean> {
    return this._httpClient.post<boolean>('', loginUser);
  }

  getUserStatus(): Observable<UserTokenModel> {
    const localUserToken = localStorage.getItem('TOKEN');
    if (localUserToken && localUserToken.length) {
      return of<UserTokenModel>(JSON.parse(localUserToken));
    }
    return of(null);
  }

  getMenu(): Observable<Array<MenuItemModel>> {
    return of(this.menuItems);
  }
}
