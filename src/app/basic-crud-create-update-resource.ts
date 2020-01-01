import { OnInit, Inject } from '@angular/core';
import { BasicCrudService } from './basic-crud.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';


export class BasicCrudCreateUpdateResource<SERVICE extends BasicCrudService<any>> implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    protected service: SERVICE,
    protected snackBar: MatSnackBar,
    protected dialogRef: MatDialogRef<any>
  ) {
  }
  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as any;
    }
  }

  save() {
    if (this.mode === 'create') {
      this.create();
    } else if (this.mode === 'update') {
      this.update();
    }
  }

  create() {
    const costumer = this.form.value;
    this.service.save(costumer).then(data => {
      this.dialogRef.close(data);
      this.openSnackBar("Salvo com sucesso!", "Fechar", 2000);
    }).catch(error => {
      this.openSnackBar(error.error.errors[0].message, "Fechar", 7000);
    });
  }

  update() {
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
