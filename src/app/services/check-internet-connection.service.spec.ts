import { TestBed } from '@angular/core/testing';

import { CheckInternetConnectionService } from './check-internet-connection.service';

describe('CheckInternetConnectionService', () => {
  let service: CheckInternetConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckInternetConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
