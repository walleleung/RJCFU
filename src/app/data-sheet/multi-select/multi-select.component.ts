import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DesignComponentItem} from '../../model/design-component-item';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Output()
  edit: EventEmitter<DesignComponentItem> = new EventEmitter();

  @Input()
  model: DesignComponentItem;

  constructor() {
  }

  ngOnInit() {
  }

  editItem() {
    this.edit.emit(this.model);
  }
}
