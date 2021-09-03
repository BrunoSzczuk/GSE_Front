import { Component, OnInit } from '@angular/core';
import { BasicCrudResource } from '../basic-crud-resource';
import { ProdutoService } from '../shared/produto.service';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PaisCreateUpdateComponent } from '../pais/create-update/pais-create-update.component';

@Component({
  selector: 'vex-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger80ms
  ]
})
export class ProdutoComponent extends BasicCrudResource<ProdutoService> {
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

  constructor(dialog: MatDialog, service: ProdutoService, snackBar: MatSnackBar) {
    super(service, snackBar, dialog, PaisCreateUpdateComponent,
      [
        { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
        { label: 'Código', property: 'cdProduto', type: 'text', visible: true },
        { label: 'Descrição', property: 'dsProduto', type: 'text', visible: true },
        { label: 'Tipo do Produto', property: 'tpProduto', type: 'text', visible: true },
        { label: 'EAN', property: 'cdEan', type: 'text', visible: true },
        { label: 'Ação', property: 'actions', type: 'button', visible: true }
      ]);
  }

}
