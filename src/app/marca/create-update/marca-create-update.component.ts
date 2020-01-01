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
import { Marca } from '../model/marca';
import { MarcaService } from 'src/app/shared/marca.service';
import { MatSnackBar } from '@angular/material';
import { BasicCrudCreateUpdateResource } from 'src/app/basic-crud-create-update-resource';
import { GrupoProdutoCreateUpdateComponent } from 'src/app/grupo-produto/create-update/grupo-produto-create-update.component';

@Component({
  selector: 'vex-marca-create-update',
  templateUrl: './marca-create-update.component.html',
  styleUrls: ['./marca-create-update.component.scss']
})
export class MarcaCreateUpdateComponent extends BasicCrudCreateUpdateResource<MarcaService> {

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

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    service: MarcaService,
    dialogRef: MatDialogRef<GrupoProdutoCreateUpdateComponent>,
    snackBar: MatSnackBar,
    private fb: FormBuilder) {
    super(defaults, service, snackBar, dialogRef);
  }

  ngOnInit() {
    super.ngOnInit();
    this.form = this.fb.group({
      id: [this.defaults.id || null],
      cdMarca: this.defaults.cdMarca || '',
      dsMarca: [this.defaults.dsMarca || ''],
      stAtivo: [this.defaults.stAtivo === undefined ? true : this.defaults.stAtivo],
    });
  }

}
