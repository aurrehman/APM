import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from './country.state';

export interface State {
  countries: CountryState;
}
export const worldStoreName = 'world';


const getCountryFeatureState = createFeatureSelector<CountryState>(worldStoreName);

export const getSelectedCounrtyName = createSelector(
  getCountryFeatureState,
  state => state.selectedCountry
);

export const getSelectedCountry = createSelector(
  getCountryFeatureState,
  getSelectedCounrtyName,
  (state, getSelectedCounrtyName) => {
    {
      return getSelectedCounrtyName ? state.countries.find(c => c.name === getSelectedCounrtyName) : null;
    }
  }
);

export const getCountriesByRegion = createSelector(
  getCountryFeatureState,
  (state: CountryState) => state.countries
);

export const getRegions = createSelector(
  getCountryFeatureState,
  (state: CountryState) => state.regions
);

export const getError = createSelector(
  getCountryFeatureState,
  state => state.error
);
