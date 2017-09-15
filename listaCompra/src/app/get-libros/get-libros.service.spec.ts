import { TestBed, inject } from '@angular/core/testing';

import { GetLibrosService } from './get-libros.service';

describe('GetLibrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLibrosService]
    });
  });

  it('should be created', inject([GetLibrosService], (service: GetLibrosService) => {
    expect(service).toBeTruthy();
  }));
});
