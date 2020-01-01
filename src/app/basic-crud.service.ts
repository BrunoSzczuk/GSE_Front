import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FilialService } from './shared/filial.service';
import { environment } from 'src/environments/environment';
import { BaseModel } from './base-model';

export class ResponseDados {
  content: [];
  pageable: [];
  totalElements: number;
  last: boolean;
  totalPages: number;
  size: number;
  numberOfElements: number;
  number: number;
  sort: [];
  first: boolean;
}
@Injectable({
  providedIn: 'root'
})
export abstract class BasicCrudService<CLASSE extends BaseModel> {

  constructor(protected http: HttpClient, private resourceURL: string) { }

  async save(obj: CLASSE): Promise<any> {
    return this.http.post<ResponseDados>(environment.urlAPI + this.resourceURL, obj).toPromise();
  }

  async findAll(pagina?: {
    linesPerPage: number,
    page: number,
    descricao: string,
  }): Promise<ResponseDados> {
    let params = new HttpParams();
    if (pagina) {
      params = params.append('page', pagina.page.toString());
      params = params.append('linesPerPage', pagina.linesPerPage.toString());
      if (pagina.descricao) {
        params = params.append('nome', pagina.descricao);
      }
    }
    const data = await this.http.get<ResponseDados>(environment.urlAPI + this.resourceURL, { params }
    ).toPromise();
    return data;
  }
  async update(obj: CLASSE): Promise<any> {
    const data = await this.http.put<ResponseDados>(environment.urlAPI + this.resourceURL + obj.id, obj).toPromise();
    return data;
  }
  async remove(obj: CLASSE): Promise<any> {
    return this.http.delete(environment.urlAPI + this.resourceURL + obj.id).toPromise();
  }
}
