import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../model/menu-item';
import {SystemService} from '../service/system.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  confirmQuitDlgVisible: boolean;

  menuItems: Array<MenuItem>;

  constructor(private _systemService: SystemService,
              private _router: Router) {
    this.confirmQuitDlgVisible = false;
    this.menuItems = new Array<MenuItem>();
  }

  ngOnInit() {
    this._systemService.getMenu()
      .subscribe(p => {
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

    this._router.navigate(['login']).catch(e => {
      console.log(e);
    });
  }

  handleCancel() {
    this.confirmQuitDlgVisible = false;
  }

  navTo(i: MenuItem) {
    this._router.navigate([i.path]).catch(e => {
      console.error(e);
    });
  }
}
