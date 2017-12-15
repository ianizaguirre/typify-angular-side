import { TestBed, inject } from '@angular/core/testing';

import { ArticleApiService } from './article-api.service';

describe('ArticleApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleApiService]
    });
  });

  it('should be created', inject([ArticleApiService], (service: ArticleApiService) => {
    expect(service).toBeTruthy();
  }));
});
