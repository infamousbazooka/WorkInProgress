/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserCheckService } from './user-check.service';

describe('Service: UserCheck', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCheckService]
    });
  });

  it('should ...', inject([UserCheckService], (service: UserCheckService) => {
    expect(service).toBeTruthy();
  }));
});
