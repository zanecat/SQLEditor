import { TestBed, inject } from '@angular/core/testing';

import { DbCacheService } from './db-cache.service';

describe('DbCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbCacheService]
    });
  });

  it('should be created', inject([DbCacheService], (service: DbCacheService) => {
    expect(service).toBeTruthy();
  }));
});
