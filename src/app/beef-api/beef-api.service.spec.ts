import { TestBed, inject } from '@angular/core/testing';

import { BeefApiService } from './beef-api.service';

describe('BeefApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeefApiService]
    });
  });

  it('should ...', inject([BeefApiService], (service: BeefApiService) => {
    expect(service).toBeTruthy();

    console.log(service.getChannels());
  }));
});
