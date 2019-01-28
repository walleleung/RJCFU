import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectSettingComponent } from './single-select-setting.component';

describe('SingleSelectSettingComponent', () => {
  let component: SingleSelectSettingComponent;
  let fixture: ComponentFixture<SingleSelectSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
