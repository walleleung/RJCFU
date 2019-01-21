import {Component, OnInit} from '@angular/core';
import {MenuItem} from './model/menu-item';
import {SystemService} from './service/system.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuItems: Array<MenuItem>;
  confirmQuitDlgVisible: boolean;

  constructor(private _systemService: SystemService,
              private _router: Router) {
    this.menuItems = new Array<MenuItem>();
    this.confirmQuitDlgVisible = false;
  }

  ngOnInit(): void {
    this._systemService.getMenu().subscribe(p => {
      this.menuItems = p;
    });
  }

  logout() {
    this.confirmQuitDlgVisible = true;
  }

  isCurrentMenu(i: MenuItem): boolean {
    let path = this._router.url;
    if (path === '/') {
      path = '';
    }
    return i.path === path;
  }

  handleLogout() {
    // do sth.
  }

  handleCancel() {
    this.confirmQuitDlgVisible = false;
  }
}
