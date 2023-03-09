import { TestBed } from '@angular/core/testing';

import { PostAndPhotosService } from './post-and-photos.service';

describe('PostAndPhotosService', () => {
  let service: PostAndPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAndPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
