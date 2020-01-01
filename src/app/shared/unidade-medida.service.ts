import { Injectable } from '@angular/core';
import { BasicCrudService } from '../basic-crud.service';
import { HttpClient } from '@angular/common/http';
import { UnidadeMedida } from '../unidade-medida/model/unidade-medida';

@Injectable({
  providedIn: 'root'
})
export class UnidadeMedidaService extends BasicCrudService<UnidadeMedida> {
  constructor(http: HttpClient) {
    super(http, 'unidadeMedidas/');
  }
}
