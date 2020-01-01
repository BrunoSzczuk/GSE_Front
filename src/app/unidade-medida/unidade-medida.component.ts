import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { BasicCrudResource } from '../basic-crud-resource';
import { UnidadeMedidaService } from '../shared/unidade-medida.service';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { UnidadeMedida } from './model/unidade-medida';

import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { UnidadeMedidaCreateUpdateComponent } from './create-update/unidade-medida-create-update.component';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-unidade-medida',
  templateUrl: './unidade-medida.component.html',
  styleUrls: ['./unidade-medida.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class UnidadeMedidaComponent extends BasicCrudResource<UnidadeMedidaService> {

  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;


  constructor(dialog: MatDialog, service: UnidadeMedidaService, snackBar: MatSnackBar) {
    super(service, snackBar, dialog, UnidadeMedidaCreateUpdateComponent,
      [
        { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
        { label: 'Código', property: 'cdUnidadeMedida', type: 'text', visible: true },
        { label: 'Descrição', property: 'dsUnidadeMedida', type: 'text', visible: true },
        { label: 'Casas Decimais', property: 'qtCasasDecimais', type: 'text', visible: true },
        { label: 'Ação', property: 'actions', type: 'button', visible: true }
      ]);
  }

}
