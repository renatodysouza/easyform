import { TestBed } from '@angular/core/testing';

import { AngularEasyFormService } from './angular-easy-form.service';

describe('AngularEasyFormService', () => {
  let service: AngularEasyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularEasyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
