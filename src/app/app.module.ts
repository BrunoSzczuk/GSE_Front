import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from 'src/@vex/layout/layout.module';
import { GrupoProdutoComponent } from './grupo-produto/grupo-produto.component';
import { MatDialogModule } from '@angular/material';
import { FilialComponent } from './filial/filial.component';
import { MunicipioComponent } from './municipio/municipio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EstadoComponent } from './estado/estado.component';
import { PaisComponent } from './pais/pais.component';

@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Vex
    VexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
