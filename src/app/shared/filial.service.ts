import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Filial } from '../filial/model/filial';
import { ResponseDados } from './grupo-produto.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilialService {
  constructor(private http: HttpClient) { }


  public getFilialLogada(): Filial {
    let filial: Filial = new Filial();
    filial.id = 1;
    return filial;
  }
  private getObjectURL() {
    return 'filials/';
  }

  async save(obj: Filial): Promise<any> {
    return this.http.post<ResponseDados>(environment.urlAPI + this.getObjectURL(), obj).toPromise();
  }

  async findAll(pagina: {
    linesPerPage: number,
    page: number,
    descricao: string,
  }): Promise<ResponseDados> {
    let params = new HttpParams();
    /* params = params.append('page', pagina.page.toString());
     params = params.append('linesPerPage', pagina.linesPerPage.toString());
     params = params.append('descricao', pagina.descricao);*/
    const data = await this.http.get<ResponseDados>(environment.urlAPI + this.getObjectURL(), { params }
    ).toPromise();
    return data;
  }
  async update(obj: Filial): Promise<any> {
    console.log('vai atualizar')
    const data = await this.http.put<ResponseDados>(environment.urlAPI + this.getObjectURL() + obj.id, obj).toPromise();
    return data;
  }
  async remove(obj: Filial): Promise<any> {
    return this.http.delete(environment.urlAPI + this.getObjectURL() + obj.id).toPromise();
  }
}
