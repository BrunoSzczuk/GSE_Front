import { Injectable, ViewChild, OnDestroy, AfterViewInit, OnInit, Input, Component } from '@angular/core';
import { BasicCrudService } from './basic-crud.service';
import { BaseModel } from './base-model';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent, MatSnackBar, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ComponentType } from '@angular/cdk/portal';

export class BasicCrudResource<SERVICE extends BasicCrudService<any>>
  implements OnInit, AfterViewInit, OnDestroy {
  pageSize = 10;
  page = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<any> | null;
  selection = new SelectionModel<any>(true, []);
  searchCtrl = new FormControl();
  CREATE_UPDATE_COMPONENT: ComponentType<any>;
  @Input()
  columns: TableColumn<any>[];
  dados: any[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(protected service: SERVICE, protected snackBar: MatSnackBar, protected dialog: MatDialog, CREATE_UPDATE_COMPONENT: ComponentType<any>, columns: TableColumn<any>[]) {
    this.columns = columns;
    this.CREATE_UPDATE_COMPONENT = CREATE_UPDATE_COMPONENT;
  }

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
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getData();
    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.getData(value));
  }

  ngAfterViewInit() {
  }

  create() {
    this.dialog.open(this.CREATE_UPDATE_COMPONENT).afterClosed()
      .subscribe((customer: any) => {
        this.getData();
      });
  }

  update(customer: any) {
    this.dialog.open(this.CREATE_UPDATE_COMPONENT, {
      data: customer
    }).afterClosed().subscribe(updatedSubGrupoProduto => {
      this.getData();
    });
  }

  ngOnDestroy() {
  }
}
