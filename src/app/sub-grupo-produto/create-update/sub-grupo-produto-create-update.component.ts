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
import { SubGrupoProduto } from '../model/sub-grupo-produto';
import { SubGrupoProdutoService } from 'src/app/shared/sub-grupo-produto.service';
import { Pais } from 'src/app/pais/model/pais';
import { PaisService } from 'src/app/shared/pais.service';
import { FilialService } from 'src/app/shared/filial.service';
import { GrupoProdutoService } from 'src/app/shared/grupo-produto.service';
import { Filial } from 'src/app/filial/model/filial';
import { GrupoProduto } from 'src/app/grupo-produto/model/grupo-produto';
import { MatSnackBar } from '@angular/material';
import { BasicCrudCreateUpdateResource } from 'src/app/basic-crud-create-update-resource';

@Component({
  selector: 'vex-sub-grupo-produto-create-update',
  templateUrl: './sub-grupo-produto-create-update.component.html',
  styleUrls: ['./sub-grupo-produto-create-update.component.scss']
})
export class SubGrupoProdutoCreateUpdateComponent extends BasicCrudCreateUpdateResource<SubGrupoProdutoService> {

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
  grupoProdutos: GrupoProduto[];
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    service: SubGrupoProdutoService,
    private filialService: FilialService,
    private grupoProdutoService: GrupoProdutoService,
    dialogRef: MatDialogRef<SubGrupoProdutoCreateUpdateComponent>,
    private fb: FormBuilder,
    snackBar: MatSnackBar) {
    super(defaults, service, snackBar, dialogRef);
  }

  ngOnInit() {
    super.ngOnInit();
    this.filialService.findAll().then(data => this.filials = data.content);
    this.grupoProdutoService.findAll().then(data => this.grupoProdutos = data.content);
    this.form = this.fb.group({
      id: [this.defaults.id || null],
      cdSubgrupo: this.defaults.cdSubgrupo || '',
      dsSubgrupo: [this.defaults.dsSubgrupo || ''],
      filial: [this.defaults.filial || null],
      grupoProduto: [this.defaults.grupoProduto || null],
    });
  }

}
