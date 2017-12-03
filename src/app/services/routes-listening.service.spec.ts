import { TestBed, inject } from '@angular/core/testing';

import { RoutesListeningService } from './routes-listening.service';

describe('RoutesListeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesListeningService]
    });
  });

  it('should be created', inject([RoutesListeningService], (service: RoutesListeningService) => {
    expect(service).toBeTruthy();
  }));
});
