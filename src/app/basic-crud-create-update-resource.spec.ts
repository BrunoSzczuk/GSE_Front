import { TestBed } from '@angular/core/testing';
import { BasicCrudCreateUpdateResource } from './basic-crud-create-update-resource';


describe('BasicCrudCreateUpdateResource', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicCrudCreateUpdateResource<any> = TestBed.get(BasicCrudCreateUpdateResource);
    expect(service).toBeTruthy();
  });
});
