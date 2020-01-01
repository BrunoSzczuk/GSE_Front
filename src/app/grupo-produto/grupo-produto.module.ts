import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoProdutoComponent } from './grupo-produto.component';
import { GrupoProdutoRoutingModule } from './grupo-produto-routing.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { MatPaginatorModule, MatTableModule, MatSortModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { GrupoProdutoCreateUpdateModule } from './create-update/grupo-produto-create-update.module';



@NgModule({
  declarations: [GrupoProdutoComponent],
  imports: [
    CommonModule,
    GrupoProdutoRoutingModule,
    GrupoProdutoCreateUpdateModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule
  ]
})
export class GrupoProdutoModule { }
