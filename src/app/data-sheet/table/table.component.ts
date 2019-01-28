import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DesignComponentItem} from '../../model/design-component-item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output()
  edit: EventEmitter<DesignComponentItem> = new EventEmitter();

  @Input()
  model: DesignComponentItem;

  constructor() {
  }

  ngOnInit() {
  }

  editTable() {
    this.edit.emit(this.model);
  }
}
