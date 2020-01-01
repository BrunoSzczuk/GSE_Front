import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { BasicCrudResource } from '../basic-crud-resource';
import { MunicipioService } from '../shared/municipio.service';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { Municipio } from './model/municipio';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MunicipioCreateUpdateComponent } from './create-update/municipio-create-update.component';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class MunicipioComponent extends BasicCrudResource<MunicipioService> {

  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;


  constructor(dialog: MatDialog, service: MunicipioService, snackBar: MatSnackBar) {
    super(service, snackBar, dialog, MunicipioCreateUpdateComponent,
      [
        { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
        { label: 'Código', property: 'id', type: 'text', visible: true },
        { label: 'Nome', property: 'nmMunicipio', type: 'text', visible: true },
        { label: 'Cód. UF IBGE', property: 'cdUfibge', type: 'text', visible: true },
        { label: 'Estado', property: 'estado', type: 'text', visible: true },
        { label: 'Ação', property: 'actions', type: 'button', visible: true }
      ]);
  }
}
