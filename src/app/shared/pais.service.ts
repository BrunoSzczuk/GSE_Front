import { Injectable } from '@angular/core';
import { Pais } from '../pais/model/pais';
import { FilialService } from './filial.service';
import { BasicCrudService } from '../basic-crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService extends BasicCrudService<Pais> {
  constructor(http: HttpClient) {
    super(http, 'paises/');
  }
}
