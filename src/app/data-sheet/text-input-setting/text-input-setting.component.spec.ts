import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputSettingComponent } from './text-input-setting.component';

describe('TextInputSettingComponent', () => {
  let component: TextInputSettingComponent;
  let fixture: ComponentFixture<TextInputSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
