import { Injectable } from '@angular/core';
import { BasicCrudService } from '../basic-crud.service';
import { Marca } from '../marca/model/marca';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcaService extends BasicCrudService<Marca> {
  constructor(http: HttpClient) {
    super(http, 'marcas/');
  }
}
