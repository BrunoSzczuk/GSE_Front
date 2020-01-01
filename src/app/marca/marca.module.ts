import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaComponent } from './marca.component';
import { MarcaRoutingModule } from './marca-routing.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { MatPaginatorModule, MatTableModule, MatSortModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { MarcaCreateUpdateModule } from './create-update/marca-create-update.module';



@NgModule({
  declarations: [MarcaComponent],
  imports: [
    CommonModule,
    MarcaRoutingModule,
    MarcaCreateUpdateModule,
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
export class MarcaModule { }
