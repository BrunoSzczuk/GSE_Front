import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubGrupoProdutoComponent } from './sub-grupo-produto.component';


const routes: Routes = [
  {
    path: '',
    component: SubGrupoProdutoComponent,
    data: {
      toolbarShadowEnabled: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubGrupoProdutoRoutingModule {
}
