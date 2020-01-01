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

@Component({
  selector: 'vex-sub-grupo-produto-create-update',
  templateUrl: './sub-grupo-produto-create-update.component.html',
  styleUrls: ['./sub-grupo-produto-create-update.component.scss']
})
export class SubGrupoProdutoCreateUpdateComponent implements OnInit {

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
    private service: SubGrupoProdutoService,
    private filialService: FilialService,
    private grupoProdutoService: GrupoProdutoService,
    private dialogRef: MatDialogRef<SubGrupoProdutoCreateUpdateComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as SubGrupoProduto;
    }
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

  save() {
    if (this.mode === 'create') {
      this.createSubGrupoProduto();
    } else if (this.mode === 'update') {
      this.updateSubGrupoProduto();
    }
  }

  createSubGrupoProduto() {
    const costumer = this.form.value;
    this.service.save(costumer).then(data => {
      this.dialogRef.close(data);
      this.openSnackBar("Salvo com sucesso!", "Fechar", 2000);
    }).catch(error => {
      this.openSnackBar(error.error.errors[0].message, "Fechar", 7000);
    });
  }

  openSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }

  updateSubGrupoProduto() {
    const costumer = this.form.value;
    costumer.id = this.defaults.id;
    this.service.update(costumer).then(data => {
      this.dialogRef.close(data);
      this.openSnackBar("Atualizado com sucesso!", "Fechar", 2000);
    }).catch(error => {
      this.openSnackBar(error.error.errors[0].message, "Fechar", 7000);
    });
  }


  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
