import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StlCheckerComponent } from './stl-checker.component';

describe('StlCheckerComponent', () => {
  let component: StlCheckerComponent;
  let fixture: ComponentFixture<StlCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StlCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StlCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
