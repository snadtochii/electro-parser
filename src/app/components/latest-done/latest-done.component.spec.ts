import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestDoneComponent } from './latest-done.component';

describe('LatestDoneComponent', () => {
  let component: LatestDoneComponent;
  let fixture: ComponentFixture<LatestDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
