import { RouterModule, Routes } from '@angular/router';

import { CountryShellComponent } from './components/country-shell/country-shell.component'

const routes: Routes = [{ path: 'countries', component: CountryShellComponent }];

export const CountryRoutes = RouterModule.forChild(routes);
