import { TestBed } from '@angular/core/testing';

import { MolaChurchService } from './mola-church.service';

describe('MolaChurchService', () => {
  let service: MolaChurchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MolaChurchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
