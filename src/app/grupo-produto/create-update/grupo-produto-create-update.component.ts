import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icEdit from '@iconify/icons-ic/baseline-edit';
import icBallot from '@iconify/icons-ic/outline-ballot';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPrint from '@iconify/icons-ic/twotone-print';
import { GrupoProduto } from '../model/grupo-produto';
import { GrupoProdutoService } from 'src/app/shared/grupo-produto.service';
import { GrupoProdutoCreateUpdateModule } from './grupo-produto-create-update.module';
import { MatSnackBar } from '@angular/material';
import { BasicCrudCreateUpdateResource } from 'src/app/basic-crud-create-update-resource';
import { FilialService } from 'src/app/shared/filial.service';
import { Filial } from 'src/app/filial/model/filial';

@Component({
  selector: 'vex-grupo-produto-create-update',
  templateUrl: './grupo-produto-create-update.component.html',
  styleUrls: ['./grupo-produto-create-update.component.scss']
})
export class GrupoProdutoCreateUpdateComponent extends BasicCrudCreateUpdateResource<GrupoProdutoService> {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  icMoreVert = icMoreVert;
  icClose = icClose;
  icEdit = icEdit;
  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;

  icBallot = icBallot;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPhone = icPhone;
  filials: Filial[];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    service: GrupoProdutoService,
    private filialService: FilialService,
    dialogRef: MatDialogRef<GrupoProdutoCreateUpdateComponent>,
    snackBar: MatSnackBar,
    private fb: FormBuilder) {
    super(defaults, service, snackBar, dialogRef);
  }

  ngOnInit() {
    super.ngOnInit();
    this.filialService.findAll().then(data => this.filials = data.content);
    this.form = this.fb.group({
      id: [this.defaults.id || null],
      cdGrupo: this.defaults.cdGrupo || '',
      dsGrupo: [this.defaults.dsGrupo || ''],
      stAtivo: [this.defaults.stAtivo === undefined ? true : this.defaults.stAtivo],
      filial: [this.defaults.filial || null],
    });
  }
}
