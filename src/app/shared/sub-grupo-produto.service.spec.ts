import { TestBed } from '@angular/core/testing';

import { SubGrupoProdutoService } from './sub-grupo-produto.service';

describe('SubGrupoProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubGrupoProdutoService = TestBed.get(SubGrupoProdutoService);
    expect(service).toBeTruthy();
  });
});
