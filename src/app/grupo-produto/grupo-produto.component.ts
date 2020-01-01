import { Component, OnInit, AfterViewInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { ReplaySubject, Observable, of } from 'rxjs';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, PageEvent, MatSnackBar } from '@angular/material';
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
import { BasicCrudResource } from '../basic-crud-resource';
import { Filial } from '../filial/model/filial';

@Component({
  selector: 'vex-grupo-produto',
  templateUrl: './grupo-produto.component.html',
  styleUrls: ['./grupo-produto.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class GrupoProdutoComponent extends BasicCrudResource<GrupoProdutoService>{
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;
  constructor(dialog: MatDialog, service: GrupoProdutoService, snackBar: MatSnackBar) {
    super(service, snackBar, dialog, GrupoProdutoCreateUpdateComponent, [
      { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
      { label: 'Código', property: 'cdGrupo', type: 'text', visible: true },
      { label: 'Descrição', property: 'dsGrupo', type: 'text', visible: true },
      { label: 'Ação', property: 'actions', type: 'button', visible: true }
    ]);
  }

}
