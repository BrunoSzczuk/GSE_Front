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
  {
    path: 'pais',
    loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule),
  },
  {
    path: 'estado',
    loadChildren: () => import('./estado/estado.module').then(m => m.EstadoModule),
  },
  {
    path: 'municipio',
    loadChildren: () => import('./municipio/municipio.module').then(m => m.MunicipioModule),
  },
  {
    path: 'marca',
    loadChildren: () => import('./marca/marca.module').then(m => m.MarcaModule),
  },
  {
    path: 'unidade-medida',
    loadChildren: () => import('./unidade-medida/unidade-medida.module').then(m => m.UnidadeMedidaModule),
  },
  {
    path: 'sub-grupo-produto',
    loadChildren: () => import('./sub-grupo-produto/sub-grupo-produto.module').then(m => m.SubGrupoProdutoModule),
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule),
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
