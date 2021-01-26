import { CountryState } from './country.state';
import { CountryApiActions, CountryPageActions } from './actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: CountryState = {
  regions: [],
  countries: [],
  selectedCountry: '',
  error: ''
};

export const countryReducer  = createReducer<CountryState>(
  initialState,
  on(CountryApiActions.loadRegionSuccess, (state, action): CountryState => {
    return {
      ...state,
      regions: action.regions,
      error: ''
    }
  }),
  on(CountryApiActions.loadRegionFailure, (state, action): CountryState => {
    return {
      ...state,
      regions: [],
      error: action.error
    }
  }),
  on(CountryApiActions.loadCountriesByRegionSuccess, (state, action): CountryState => {
    return {
      ...state,
      countries: action.countries,
      error: ''
    }
  }),
  on(CountryApiActions.loadCountriesByRegionFailure, (state, action): CountryState => {
    return {
      ...state,
      regions: [],
      error: action.error
    }
  }),
  on(CountryPageActions.getCountryDetails, (state, action): CountryState => {
    return {
      ...state,
      selectedCountry: action.country
    };
  }),
);

