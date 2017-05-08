import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyPathComponent } from './copy-path.component';

describe('CopyPathComponent', () => {
  let component: CopyPathComponent;
  let fixture: ComponentFixture<CopyPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
