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
import { UnidadeMedida } from '../model/unidade-medida';
import { MatSnackBar } from '@angular/material';
import { UnidadeMedidaService } from 'src/app/shared/unidade-medida.service';
import { BasicCrudCreateUpdateResource } from 'src/app/basic-crud-create-update-resource';

@Component({
  selector: 'vex-unidade-medida-create-update',
  templateUrl: './unidade-medida-create-update.component.html',
  styleUrls: ['./unidade-medida-create-update.component.scss']
})
export class UnidadeMedidaCreateUpdateComponent extends BasicCrudCreateUpdateResource<UnidadeMedidaService> {

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
    service: UnidadeMedidaService,
    dialogRef: MatDialogRef<UnidadeMedidaCreateUpdateComponent>,
    private fb: FormBuilder,
    snackBar: MatSnackBar) {
    super(defaults, service, snackBar, dialogRef);
  }

  ngOnInit() {
    super.ngOnInit();
    this.form = this.fb.group({
      id: [this.defaults.id || null],
      cdUnidadeMedida: this.defaults.cdUnidadeMedida || '',
      dsUnidadeMedida: [this.defaults.dsUnidadeMedida || ''],
      qtCasasDecimais: [this.defaults.qtCasasDecimais || ''],
    });
  }
}
