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
import { Pais } from '../model/pais';
import { PaisService } from 'src/app/shared/pais.service';

@Component({
  selector: 'vex-pais-create-update',
  templateUrl: './pais-create-update.component.html',
  styleUrls: ['./pais-create-update.component.scss']
})
export class PaisCreateUpdateComponent implements OnInit {

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
    private service: PaisService,
    private dialogRef: MatDialogRef<PaisCreateUpdateComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Pais;
    }
    this.form = this.fb.group({
      id: [this.defaults.id || null],
      nmPais: this.defaults.nmPais || '',
      sgPais: [this.defaults.sgPais || ''],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createPais();
    } else if (this.mode === 'update') {
      this.updatePais();
    }
  }

  createPais() {
    const costumer = this.form.value;
    this.service.save(costumer).then(data => this.dialogRef.close(data));
  }

  updatePais() {
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
