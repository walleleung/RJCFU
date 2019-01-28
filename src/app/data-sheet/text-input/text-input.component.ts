import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DesignComponentItem} from '../../model/design-component-item';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  isEditing: boolean;

  @Input()
  model: DesignComponentItem;

  @Output()
  edit: EventEmitter<DesignComponentItem> = new EventEmitter();

  constructor() {
    this.isEditing = false;
  }

  ngOnInit() {
  }

  editTextInput() {
    this.edit.emit(this.model);
  }
}
