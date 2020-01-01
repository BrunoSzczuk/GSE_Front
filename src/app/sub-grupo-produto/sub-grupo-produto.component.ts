import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { BasicCrudResource } from '../basic-crud-resource';
import { SubGrupoProdutoService } from '../shared/sub-grupo-produto.service';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { SubGrupoProduto } from './model/sub-grupo-produto';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { SubGrupoProdutoCreateUpdateComponent } from './create-update/sub-grupo-produto-create-update.component';

@Component({
  selector: 'vex-sub-grupo-produto',
  templateUrl: './sub-grupo-produto.component.html',
  styleUrls: ['./sub-grupo-produto.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class SubGrupoProdutoComponent extends BasicCrudResource<SubGrupoProdutoService>  {
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;
  constructor(dialog: MatDialog, service: SubGrupoProdutoService, snackBar: MatSnackBar) {
    super(service, snackBar, dialog, SubGrupoProdutoCreateUpdateComponent, [
      { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
      { label: 'Código', property: 'cdSubgrupo', type: 'text', visible: true },
      { label: 'Descrição', property: 'dsSubgrupo', type: 'text', visible: true },
      { label: 'Filial', property: 'filial', type: 'text', visible: true },
      { label: 'Grupo de Produto', property: 'grupoProduto', type: 'text', visible: true },
      { label: 'Ação', property: 'actions', type: 'button', visible: true }
    ]
    );
  }

}
