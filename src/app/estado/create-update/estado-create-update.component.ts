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
import { Estado } from '../model/estado';
import { EstadoService } from 'src/app/shared/estado.service';
import { Pais } from 'src/app/pais/model/pais';
import { PaisService } from 'src/app/shared/pais.service';
import { BasicCrudCreateUpdateResource } from 'src/app/basic-crud-create-update-resource';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'vex-estado-create-update',
  templateUrl: './estado-create-update.component.html',
  styleUrls: ['./estado-create-update.component.scss']
})
export class EstadoCreateUpdateComponent extends BasicCrudCreateUpdateResource<EstadoService> {

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
  paises: Pais[];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    service: EstadoService,
    private paisService: PaisService,
    dialogRef: MatDialogRef<EstadoCreateUpdateComponent>,
    snackBar: MatSnackBar,
    private fb: FormBuilder) {
    super(defaults, service, snackBar, dialogRef);
  }

  ngOnInit() {
    super.ngOnInit();
    this.paisService.findAll().then(data => this.paises = data.content);
    this.form = this.fb.group({
      id: [this.defaults.id || null],
      nmEstado: this.defaults.nmEstado || '',
      sgEstado: [this.defaults.sgEstado || ''],
      cdIbge: [this.defaults.cdIbge || ''],
      pais: [this.defaults.pais || null],
    });
  }

}
