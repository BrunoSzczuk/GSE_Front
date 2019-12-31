import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoProdutoComponent } from './grupo-produto.component';


const routes: Routes = [
  {
    path: '',
    component: GrupoProdutoComponent,
    data: {
      toolbarShadowEnabled: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoProdutoRoutingModule {
}
