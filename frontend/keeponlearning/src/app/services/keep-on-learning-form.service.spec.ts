import { TestBed } from '@angular/core/testing';

import { KeepOnLearningFormService } from './keep-on-learning-form.service';

describe('KeepOnLearningFormService', () => {
  let service: KeepOnLearningFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeepOnLearningFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
