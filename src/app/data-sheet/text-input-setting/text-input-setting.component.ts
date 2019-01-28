import {Component, Input, OnInit} from '@angular/core';
import {DesignComponentItem} from '../../model/design-component-item';

@Component({
  selector: 'app-text-input-setting',
  templateUrl: './text-input-setting.component.html',
  styleUrls: ['./text-input-setting.component.scss']
})
export class TextInputSettingComponent implements OnInit {
  @Input()
  model: DesignComponentItem;

  constructor() {
  }

  ngOnInit() {
    console.log(this.model);
  }
}
