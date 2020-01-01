import { Injectable } from '@angular/core';
import { SubGrupoProduto } from '../sub-grupo-produto/model/sub-grupo-produto';
import { BasicCrudService } from '../basic-crud.service';
import { FilialService } from './filial.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubGrupoProdutoService extends BasicCrudService<SubGrupoProduto> {
  constructor(http: HttpClient, private filialService: FilialService) {
    super(http, 'subGrupoProdutos/');
  }
  async save(grupoProduto: SubGrupoProduto): Promise<any> {
    grupoProduto.filial = this.filialService.getFilialLogada();
    super.save(grupoProduto);
  }
}
