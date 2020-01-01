import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipioComponent } from './municipio.component';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { MatPaginatorModule, MatTableModule, MatSortModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { MunicipioCreateUpdateModule } from './create-update/municipio-create-update.module';
import { MunicipioRoutingModule } from './municipio-routing.module';



@NgModule({
  declarations: [MunicipioComponent],
  imports: [
    CommonModule,
    MunicipioRoutingModule,
    MunicipioCreateUpdateModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
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
export class MunicipioModule { }
