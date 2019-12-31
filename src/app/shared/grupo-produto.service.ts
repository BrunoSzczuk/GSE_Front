import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GrupoProduto } from '../grupo-produto/model/grupo-produto';
import { environment } from 'src/environments/environment';
import { FilialService } from './filial.service';
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
export class GrupoProdutoService {

  constructor(private http: HttpClient, private filialService: FilialService) { }

  private getObjectURL() {
    return 'grupoProdutos/';
  }

  async save(obj: GrupoProduto): Promise<any> {
    obj.filial = this.filialService.getFilialLogada();
    return this.http.post<ResponseDados>(environment.urlAPI + this.getObjectURL(), obj).toPromise();
  }

  async findAll(pagina: {
    linesPerPage: number,
    page: number,
    descricao: string,
  }): Promise<ResponseDados> {
    let params = new HttpParams();
    params = params.append('page', pagina.page.toString());
    params = params.append('linesPerPage', pagina.linesPerPage.toString());
    if (pagina.descricao) {
      params = params.append('nome', pagina.descricao);
    }
    const data = await this.http.get<ResponseDados>(environment.urlAPI + this.getObjectURL(), { params }
    ).toPromise();
    return data;
  }
  async update(obj: GrupoProduto): Promise<any> {
    const data = await this.http.put<ResponseDados>(environment.urlAPI + this.getObjectURL() + obj.id, obj).toPromise();
    return data;
  }
  async remove(obj: GrupoProduto): Promise<any> {
    return this.http.delete(environment.urlAPI + this.getObjectURL() + obj.id).toPromise();
  }
}
