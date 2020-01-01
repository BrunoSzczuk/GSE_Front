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

@Component({
  selector: 'vex-unidade-medida-create-update',
  templateUrl: './unidade-medida-create-update.component.html',
  styleUrls: ['./unidade-medida-create-update.component.scss']
})
export class UnidadeMedidaCreateUpdateComponent implements OnInit {

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
    private service: UnidadeMedidaService,
    private dialogRef: MatDialogRef<UnidadeMedidaCreateUpdateComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as UnidadeMedida;
    }
    this.form = this.fb.group({
      id: [this.defaults.id || null],
      cdUnidadeMedida: this.defaults.cdUnidadeMedida || '',
      dsUnidadeMedida: [this.defaults.dsUnidadeMedida || ''],
      qtCasasDecimais: [this.defaults.qtCasasDecimais || ''],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createUnidadeMedida();
    } else if (this.mode === 'update') {
      this.updateUnidadeMedida();
    }
  }

  createUnidadeMedida() {
    const costumer = this.form.value;
    this.service.save(costumer).then(data => {
      this.dialogRef.close(data);
      this.openSnackBar("Salvo com sucesso!", "Fechar", 2000);
    }).catch(error => {
      this.openSnackBar(error.error.errors[0].message, "Fechar", 7000);
    });
  }

  updateUnidadeMedida() {
    const costumer = this.form.value;
    costumer.id = this.defaults.id;

    this.service.update(costumer).then(data => {
      this.dialogRef.close(data);
      this.openSnackBar("Atualizado com sucesso!", "Fechar", 2000);
    }).catch(error => {
      this.openSnackBar(error.error.errors[0].message, "Fechar", 7000);
    });
  }


  openSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }


  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
