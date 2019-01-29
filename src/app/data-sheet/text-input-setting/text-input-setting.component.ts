import {Component, Input, OnInit} from '@angular/core';
import {DesignComponentItem} from '../../model/design-component-item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DesignComponentBase} from '../../model/design-component-base';
import {DesignComponentItemInput} from '../../model/design-component-item-input';

@Component({
  selector: 'app-text-input-setting',
  templateUrl: './text-input-setting.component.html',
  styleUrls: ['./text-input-setting.component.scss']
})
export class TextInputSettingComponent implements OnInit, DesignComponentBase {
  @Input()
  model: DesignComponentItem;

  textDesignForm: FormGroup;

  textType: Array<string> = ['单行文本', '多行文本', '数字', '日期', '日期范围', '时间'];

  validationType: Array<string> = ['不校验', '必须填写', '邮件', '电话号码'];

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    let data = <DesignComponentItemInput>this.model.implement;
    if (!data) {
      data = <DesignComponentItemInput>{
        label: '',
        value: '',
        type: this.textType[0],
        hint: '',
        dataSource: '',
        validation: this.validationType[0]
      };
    }

    this.textDesignForm = this._fb.group({
      label: [data.label, [Validators.required]],
      value: [data.value],
      type: [data.type, [Validators.required]],
      hint: [data.hint],
      dataSource: [data.dataSource],
      validation: [data.validation]
    });
  }

  save(): boolean {
    for (const i in this.textDesignForm.controls) {
      if (i) {
        this.textDesignForm.controls[i].markAsDirty();
        this.textDesignForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.textDesignForm.valid) {
      this.model.implement = (<DesignComponentItemInput>this.textDesignForm.getRawValue());
    }

    return this.textDesignForm.valid;
  }
}
