import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto.component';


const routes: Routes = [
  {
    path: '',
    component: ProdutoComponent,
    data: {
      toolbarShadowEnabled: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {
}
