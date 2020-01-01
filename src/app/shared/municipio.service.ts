import { Injectable } from '@angular/core';
import { BasicCrudService } from '../basic-crud.service';
import { Municipio } from '../municipio/model/municipio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService extends BasicCrudService<Municipio> {
  constructor(http: HttpClient) {
    super(http, 'municipios/');
  }
}
