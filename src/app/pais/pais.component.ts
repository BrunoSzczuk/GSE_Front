import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { PaisService } from '../shared/pais.service';
import { BasicCrudResource } from '../basic-crud-resource';
import { Pais } from './model/pais';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { PaisCreateUpdateComponent } from './create-update/pais-create-update.component';

@Component({
  selector: 'vex-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class PaisComponent extends BasicCrudResource<PaisService> {
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

  constructor(dialog: MatDialog, service: PaisService, snackBar: MatSnackBar) {
    super(service, snackBar, dialog, PaisCreateUpdateComponent,
      [
        { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
        { label: 'Código', property: 'id', type: 'text', visible: true },
        { label: 'Nome', property: 'nmPais', type: 'text', visible: true },
        { label: 'Sigla', property: 'sgPais', type: 'text', visible: true },
        { label: 'Ação', property: 'actions', type: 'button', visible: true }
      ]);
  }

}
