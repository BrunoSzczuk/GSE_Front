import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../@vex/layout/layout.component';
import { GrupoProdutoComponent } from './grupo-produto/grupo-produto.component';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';

const childrenRoutes: VexRoutes = [
  {
    path: 'grupo-produto',
    loadChildren: () => import('./grupo-produto/grupo-produto.module').then(m => m.GrupoProdutoModule),
  },
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: childrenRoutes
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
