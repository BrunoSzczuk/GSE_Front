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

@Component({
  selector: 'vex-municipio-create-update',
  templateUrl: './municipio-create-update.component.html',
  styleUrls: ['./municipio-create-update.component.scss']
})
export class MunicipioCreateUpdateComponent implements OnInit {

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
    private service: MunicipioService,
    private estadoService: EstadoService,
    private dialogRef: MatDialogRef<MunicipioCreateUpdateComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Municipio;
    }
    this.estadoService.findAll().then(data => this.estados  = data.content);
    this.form = this.fb.group({
      id: [this.defaults.id || null],
      nmMunicipio: this.defaults.nmMunicipio || '',
      cdUfibge: [this.defaults.cdUfibge || ''],
      estado: [this.defaults.estado || null],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createMunicipio();
    } else if (this.mode === 'update') {
      this.updateMunicipio();
    }
  }

  createMunicipio() {
    const costumer = this.form.value;
    this.service.save(costumer).then(data => this.dialogRef.close(data));
  }

  updateMunicipio() {
    const costumer = this.form.value;
    costumer.id = this.defaults.id;

    this.service.update(costumer).then(data => this.dialogRef.close(data));
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
