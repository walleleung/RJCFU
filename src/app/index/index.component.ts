import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../model/menu-item';
import {SystemService} from '../service/system.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  menuItems: Array<MenuItem>;

  loading: boolean;
  drawerVisible: boolean;

  constructor(private _systemService: SystemService) {
    this.loading = true;
    this.drawerVisible = false;
  }

  ngOnInit() {
    this._systemService.getMenu().subscribe(data => {
      this.menuItems = data;
      this.loading = false;
    });
  }

  open() {
    this.drawerVisible = true;
  }

  close() {
    this.drawerVisible = false;
  }
}
