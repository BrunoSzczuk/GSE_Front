import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Filial } from '../filial/model/filial';
import { environment } from 'src/environments/environment';
import { BasicCrudService } from '../basic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class FilialService extends BasicCrudService<Filial> {
  constructor(http: HttpClient) { super(http, 'filials/'); }


  public getFilialLogada(): Filial {
    const filial: Filial = new Filial();
    filial.id = 1;
    return filial;
  }

}
