import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetDesignComponent } from './sheet-design.component';

describe('SheetDesignComponent', () => {
  let component: SheetDesignComponent;
  let fixture: ComponentFixture<SheetDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
