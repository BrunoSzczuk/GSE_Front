import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from 'src/@vex/layout/layout.module';
import { MarcaComponent } from './marca/marca.component';
import { UnidadeMedidaComponent } from './unidade-medida/unidade-medida.component';
import { SubGrupoProdutoComponent } from './sub-grupo-produto/sub-grupo-produto.component';

@NgModule({
  declarations: [AppComponent],
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
