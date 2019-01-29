import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDesignComponent } from './preview-design.component';

describe('PreviewDesignComponent', () => {
  let component: PreviewDesignComponent;
  let fixture: ComponentFixture<PreviewDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
