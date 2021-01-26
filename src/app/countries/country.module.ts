import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { CountryRoutes } from './country.routes';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CountryEffects } from './store/country.effects';
import { countryReducer } from './store/country.reducer';
import { CountryShellComponent } from './components/country-shell/country-shell.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { RegionListComponent } from './components/region-list/region-list.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { CountriesService } from '../services/countries.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CountryRoutes,
    StoreModule.forFeature('world', countryReducer),
    EffectsModule.forFeature([CountryEffects]),
  ],
  declarations: [
    CountryShellComponent,
    CountryDetailsComponent,
    RegionListComponent,
    ErrorMessageComponent],
  providers: [CountriesService]


})
export class CountryModule { }
