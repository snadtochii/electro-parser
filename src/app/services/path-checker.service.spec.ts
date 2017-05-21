import { TestBed, inject } from '@angular/core/testing';

import { PathCheckerService } from './path-checker.service';

describe('PathCheckerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PathCheckerService]
    });
  });

  it('should ...', inject([PathCheckerService], (service: PathCheckerService) => {
    expect(service).toBeTruthy();
  }));
});
