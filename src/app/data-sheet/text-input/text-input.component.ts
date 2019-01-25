import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Output()
  onEdit: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  editTextInput() {
    this.onEdit.emit();
  }
}
