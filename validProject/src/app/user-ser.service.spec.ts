import { TestBed } from '@angular/core/testing';

import { UserSerService } from './user-ser.service';

describe('UserSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSerService = TestBed.get(UserSerService);
    expect(service).toBeTruthy();
  });
});
