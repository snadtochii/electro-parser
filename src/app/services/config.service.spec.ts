import { TestBed, inject } from '@angular/core/testing';

import { ConfigsService } from './config.service';

describe('ConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigsService]
    });
  });

  it('should ...', inject([ConfigsService], (service: ConfigsService) => {
    expect(service).toBeTruthy();
  }));
});
