import { Routes } from '@angular/router';
import { MainPage } from './main/main.page';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {path:'main',loadComponent: ()=>import('./main/main.page').then(m => m.MainPage)},
  {
    path: 'productlist',
    loadComponent: () => import('./product-list/product-list.page').then( m => m.ProductListPage)
  },
  {
    path: 'graphics',
    loadComponent: () => import('./graphics/graphics.page').then( m => m.GraphicsPage)
  }
];
