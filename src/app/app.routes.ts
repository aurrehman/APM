import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'countries',
    loadChildren: './countries/country.module#CountryModule',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
