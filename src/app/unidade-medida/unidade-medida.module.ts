import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadeMedidaRoutingModule } from './unidade-medida-routing.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { MatPaginatorModule, MatTableModule, MatSortModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { UnidadeMedidaCreateUpdateModule } from './create-update/unidade-medida-create-update.module';
import { UnidadeMedidaComponent } from './unidade-medida.component';



@NgModule({
  declarations: [UnidadeMedidaComponent],
  imports: [
    CommonModule,
    UnidadeMedidaRoutingModule,
    UnidadeMedidaCreateUpdateModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule
  ]
})
export class UnidadeMedidaModule { }
