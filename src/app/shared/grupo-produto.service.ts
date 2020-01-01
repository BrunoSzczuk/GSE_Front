import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GrupoProduto } from '../grupo-produto/model/grupo-produto';
import { environment } from 'src/environments/environment';
import { FilialService } from './filial.service';
import { BasicCrudService } from '../basic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoProdutoService extends BasicCrudService<GrupoProduto> {
  constructor(http: HttpClient, private filialService: FilialService) {
    super(http, 'grupoProdutos/');
  }
  async save(grupoProduto: GrupoProduto): Promise<any> {
    grupoProduto.filial = this.filialService.getFilialLogada();
    super.save(grupoProduto);
  }
}
