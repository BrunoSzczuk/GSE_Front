import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubGrupoProdutoComponent } from './sub-grupo-produto.component';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { MatPaginatorModule, MatTableModule, MatSortModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { SubGrupoProdutoRoutingModule } from './sub-grupo-produto-routing.module';
import { SubGrupoProdutoCreateUpdateModule } from './create-update/sub-grupo-produto-create-update.module';



@NgModule({
  declarations: [SubGrupoProdutoComponent],
  imports: [
    CommonModule,
    SubGrupoProdutoRoutingModule,
    SubGrupoProdutoCreateUpdateModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatSnackBarModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule
  ]
})
export class SubGrupoProdutoModule { }
