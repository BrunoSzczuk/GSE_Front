import { Injectable, ViewChild } from '@angular/core';
import { BasicCrudService } from './basic-crud.service';
import { BaseModel } from './base-model';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent, MatSnackBar } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';

export class BasicCrudResource<SERVICE extends BasicCrudService<any>> {
  pageSize = 10;
  page = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  columns: TableColumn<any>[];
  dados: any[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(protected service: SERVICE, protected snackBar: MatSnackBar) { }

  /**
  * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
  * We are simulating this request here.
  */
  getData(filtro?: string) {
    this.service.findAll({ linesPerPage: this.pageSize, page: this.page, descricao: filtro }).then(data => {
      this.dados = data.content;
      this.dataSource.data = this.dados;
      this.paginator.pageIndex = data.number;
      this.paginator.length = data.totalElements;
    });
  }
  async atualizaTabela(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.page = pageEvent.pageIndex;
    this.getData();
  }
  openSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  delete(customer: any) {
    this.service.remove(customer).then(c => {
      this.getData();
      this.openSnackBar("Deletado com sucesso!", "Fechar", 7000);
    }).catch(error => {
      this.openSnackBar(error.error.message, "Fechar", 7000);
    });
  }


  deleteAll(dados: any[]) {
    dados.forEach(c => this.delete(c));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }
}
