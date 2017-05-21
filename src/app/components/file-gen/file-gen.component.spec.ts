import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGenComponent } from './file-gen.component';

describe('FileGenComponent', () => {
  let component: FileGenComponent;
  let fixture: ComponentFixture<FileGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
