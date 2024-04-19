import { TestBed } from '@angular/core/testing';

import { SSProfilService } from './ssprofil.service';

describe('SSProfilService', () => {
  let service: SSProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
