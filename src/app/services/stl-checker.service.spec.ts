import { TestBed, inject } from '@angular/core/testing';

import { StlCheckerService } from './stl-checker.service';

describe('StlCheckerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StlCheckerService]
    });
  });

  it('should ...', inject([StlCheckerService], (service: StlCheckerService) => {
    expect(service).toBeTruthy();
  }));
});
