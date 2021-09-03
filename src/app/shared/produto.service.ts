import { Injectable } from '@angular/core';
import { BasicCrudService } from '../basic-crud.service';
import { Produto } from '../produto/model/produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BasicCrudService<Produto> {
  constructor(http: HttpClient) {
    super(http, 'produtos/');
  }
}