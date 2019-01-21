import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../model/menu-item';
import {SystemService} from '../service/system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean;

  menuItems: Array<MenuItem>;

  drawerVisible: boolean;

  constructor(private _systemService: SystemService) {
    this.loading = true;
    this.menuItems = new Array<MenuItem>();
    this.drawerVisible = false;
  }

  ngOnInit() {
    this._systemService.getMenu()
      .subscribe(p => {
        this.loading = false;
        this.menuItems = p;
      });
  }

  open() {
    this.drawerVisible = true;
  }

  close() {
    this.drawerVisible = false;
  }
}
