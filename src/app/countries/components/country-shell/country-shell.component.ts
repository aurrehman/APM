import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Region } from '../../../models/region';
import { Country } from '../../../models/country';
import { State, getRegions, getCountriesByRegion, getSelectedCountry, getError } from '../../store/country.selectors'
import { Store } from '@ngrx/store';
import { CountryPageActions } from '../../store/actions';

@Component({
  templateUrl: './country-shell.component.html'
})
export class CountryShellComponent implements OnInit {

  errorMessage$: Observable<string>;
  regions$: Observable<Region[]>;
  countries$: Observable<Country[]>;
  selectedCountry$: Observable<Country>;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(CountryPageActions.loadRegions());
    this.regions$ = this.store.select(getRegions);    
    this.errorMessage$ = this.store.select(getError);

  }
  onRegionSelectValue(region: string) {
    if(region !=""){
    this.store.dispatch(CountryPageActions.getCountriesByRegion({ region }));
    this.countries$ = this.store.select(getCountriesByRegion);
    
    }
    else {
      //Empty country dropdown and selected country details 
      this.countries$=of([]);
      this.selectedCountry$ =of();
    }
      
  }
  onCountrySelectValue(country: string) {
    this.store.dispatch(CountryPageActions.getCountryDetails({ country }));
    this.selectedCountry$=this.store.select(getSelectedCountry);
  }

}
