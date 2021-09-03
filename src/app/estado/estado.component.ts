import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { BasicCrudResource } from '../basic-crud-resource';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { Estado } from './model/estado';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { EstadoCreateUpdateComponent } from '../estado/create-update/estado-create-update.component';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { EstadoService } from '../shared/estado.service';

@Component({
  selector: 'vex-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class EstadoComponent extends BasicCrudResource<EstadoService> {
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;


  constructor(dialog: MatDialog, service: EstadoService, snackBar: MatSnackBar) {
    super(service, snackBar, dialog, EstadoCreateUpdateComponent, [
      { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
      { label: 'Código', property: 'id', type: 'text', visible: true },
      { label: 'Nome', property: 'nmEstado', type: 'text', visible: true },
      { label: 'Cód. IBGE', property: 'cdIbge', type: 'text', visible: true },
      { label: 'Sigla', property: 'sgEstado', type: 'text', visible: true },
      { label: 'País', property: 'nmPais', type: 'text', visible: true },
      { label: 'Ação', property: 'actions', type: 'button', visible: true }
    ]);
  }
}
