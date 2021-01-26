import { createAction, props } from '@ngrx/store';

export const loadRegions = createAction(
  '[Country Page] Load Region'
);

export const getCountriesByRegion = createAction(
  '[Country Page] Get Countries By Region',
  props<{ region: string }>()
);

export const getCountryDetails = createAction(
  '[Country Page] Get Country details by Name',
  props<{ country: string }>()
);