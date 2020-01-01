import { Injectable } from '@angular/core';
import { BasicCrudService } from '../basic-crud.service';
import { Estado } from '../estado/model/estado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService extends BasicCrudService<Estado> {
  constructor(http: HttpClient) {
    super(http, 'estados/');
  }
}

