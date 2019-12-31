import { Component, OnInit, AfterViewInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { ReplaySubject, Observable, of } from 'rxjs';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, PageEvent } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { GrupoProduto } from './model/grupo-produto';
import { GrupoProdutoCreateUpdateComponent } from './create-update/grupo-produto-create-update.component';
import { GrupoProdutoService } from '../shared/grupo-produto.service';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';

@Component({
  selector: 'vex-grupo-produto',
  templateUrl: './grupo-produto.component.html',
  styleUrls: ['./grupo-produto.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class GrupoProdutoComponent implements OnInit, AfterViewInit, OnDestroy {

  customers: GrupoProduto[];

  @Input()
  columns: TableColumn<GrupoProduto>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Código', property: 'cdGrupo', type: 'text', visible: true },
    { label: 'Descrição', property: 'dsGrupo', type: 'text', visible: true },
    { label: 'Ação', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  page = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<GrupoProduto> | null;
  selection = new SelectionModel<GrupoProduto>(true, []);
  searchCtrl = new FormControl();

  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private dialog: MatDialog, private service: GrupoProdutoService) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData(filtro?: string) {
    this.service.findAll({ linesPerPage: this.pageSize, page: this.page, descricao: filtro }).then(data => {
      this.customers = data.content;
      this.dataSource.data = this.customers;
      this.paginator.pageIndex = data.number;
      this.paginator.length = data.totalElements;
    });
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

  async atualizaTabela(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.page = pageEvent.pageIndex;
    this.getData();
  }
  createGrupoProduto() {
    this.dialog.open(GrupoProdutoCreateUpdateComponent).afterClosed().subscribe((customer: GrupoProduto) => {
      this.getData();
    });
  }

  updateGrupoProduto(customer: GrupoProduto) {
    this.dialog.open(GrupoProdutoCreateUpdateComponent, {
      data: customer
    }).afterClosed().subscribe(updatedGrupoProduto => {
      this.getData();
    });
  }

  deleteGrupoProduto(customer: GrupoProduto) {
    this.service.remove(customer).then(c => this.getData());
  }

  deleteGrupoProdutos(customers: GrupoProduto[]) {
    customers.forEach(c => this.deleteGrupoProduto(c));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
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

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  ngOnDestroy() {
  }

}
