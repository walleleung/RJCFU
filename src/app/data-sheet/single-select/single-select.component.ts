import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DesignComponentItem} from '../../model/design-component-item';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss']
})
export class SingleSelectComponent implements OnInit {
  @Output()
  edit: EventEmitter<DesignComponentItem> = new EventEmitter();

  @Input()
  model: DesignComponentItem;

  constructor() {
  }

  ngOnInit() {
  }

  editComponent() {
    this.edit.emit(this.model);
  }
}
