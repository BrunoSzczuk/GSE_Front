import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { BasicCrudResource } from '../basic-crud-resource';

import { Marca } from './model/marca';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { MarcaService } from '../shared/marca.service';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MarcaCreateUpdateComponent } from './create-update/marca-create-update.component';

@Component({
  selector: 'vex-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class MarcaComponent extends BasicCrudResource<MarcaService>  {
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;
  constructor(dialog: MatDialog, service: MarcaService, snackBar: MatSnackBar) {
    super(service, snackBar, dialog, MarcaCreateUpdateComponent, [
      { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
      { label: 'Código', property: 'cdMarca', type: 'text', visible: true },
      { label: 'Descrição', property: 'dsMarca', type: 'text', visible: true },
      { label: 'Ação', property: 'actions', type: 'button', visible: true }
    ]);
  }

}
