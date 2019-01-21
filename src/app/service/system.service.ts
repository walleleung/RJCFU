import {Injectable} from '@angular/core';
import {MenuItem} from '../model/menu-item';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private readonly menuItems: Array<MenuItem> = [
    {menuName: '首页', iconName: 'home', path: ''},
    {menuName: '搜索', iconName: 'search', path: '/search'},
    {menuName: '患者管理', iconName: 'team', path: '/patient'},
    {menuName: '随访管理', iconName: 'schedule', path: '/followup'},
    {menuName: '数据集', iconName: 'database', path: '/dataset'},
    {menuName: '表单设计', iconName: 'ant-design', path: '/design'},
    {menuName: '系统设置', iconName: 'setting', path: '/system'},
    {menuName: '数据导出', iconName: 'export', path: '/export'}
  ];

  constructor() {
  }

  getMenu(): Observable<Array<MenuItem>> {
    return of(this.menuItems);
  }
}
