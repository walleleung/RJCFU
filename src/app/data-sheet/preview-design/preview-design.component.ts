import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-preview-design',
  templateUrl: './preview-design.component.html',
  styleUrls: ['./preview-design.component.scss']
})
export class PreviewDesignComponent implements OnInit {
  @Input()
  model: any[] = [];

  formGroup: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      formLayout: ['vertical', [Validators.required]]
    });
  }

}
