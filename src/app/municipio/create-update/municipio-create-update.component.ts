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
import { Municipio } from '../model/municipio';
import { MunicipioService } from 'src/app/shared/municipio.service';
import { Pais } from 'src/app/pais/model/pais';
import { PaisService } from 'src/app/shared/pais.service';
import { EstadoService } from 'src/app/shared/estado.service';
import { Estado } from 'src/app/estado/model/estado';
import { BasicCrudCreateUpdateResource } from 'src/app/basic-crud-create-update-resource';
import { MatSnackBar } from '@angular/material';
import { EstadoCreateUpdateComponent } from 'src/app/estado/create-update/estado-create-update.component';

@Component({
  selector: 'vex-municipio-create-update',
  templateUrl: './municipio-create-update.component.html',
  styleUrls: ['./municipio-create-update.component.scss']
})
export class MunicipioCreateUpdateComponent extends BasicCrudCreateUpdateResource<MunicipioService> {

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
  estados: Estado[];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    service: MunicipioService,
    private estadoService: EstadoService,
    dialogRef: MatDialogRef<EstadoCreateUpdateComponent>,
    snackBar: MatSnackBar,
    private fb: FormBuilder) {
    super(defaults, service, snackBar, dialogRef);
  }

  ngOnInit() {
    super.ngOnInit();
    this.estadoService.findAll().then(data => this.estados = data.content);
    this.form = this.fb.group({
      id: [this.defaults.id || null],
      nmMunicipio: this.defaults.nmMunicipio || '',
      cdUfibge: [this.defaults.cdUfibge || ''],
      estado: [this.defaults.estado || null],
    });
  }

}
