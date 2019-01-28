import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectSettingComponent } from './multi-select-setting.component';

describe('MultiSelectSettingComponent', () => {
  let component: MultiSelectSettingComponent;
  let fixture: ComponentFixture<MultiSelectSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
