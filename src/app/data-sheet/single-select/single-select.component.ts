import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DesignComponentItem} from '../../model/design-component-item';
import {DesignComponentBase} from '../../model/design-component-base';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss']
})
export class SingleSelectComponent implements OnInit, DesignComponentBase {
  @Output()
  edit: EventEmitter<DesignComponentItem> = new EventEmitter();

  designForm: FormGroup;

  @Input()
  model: DesignComponentItem;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.designForm = this._formBuilder.group([
    ]);
  }

  editComponent() {
    this.edit.emit(this.model);
  }

  save(): boolean {
    return false;
  }
}
