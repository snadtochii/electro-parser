import { TestBed, inject } from '@angular/core/testing';

import { FilesControlService } from './files-control.service';

describe('FilesControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesControlService]
    });
  });

  it('should ...', inject([FilesControlService], (service: FilesControlService) => {
    expect(service).toBeTruthy();
  }));
});
