import { TestBed } from '@angular/core/testing';

import { BasicCrudResource } from './basic-crud-resource';

describe('BasicCrudResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicCrudResource = TestBed.get(BasicCrudResource);
    expect(service).toBeTruthy();
  });
});
