import { createAction, props } from '@ngrx/store';
import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';

export const loadRegionSuccess = createAction(
    '[Country API] Load Region Success',
    props<{ regions: Region[] }>()
);

export const loadRegionFailure = createAction(
    '[Country API] Load Region Fail',
    props<{ error: string }>()
);
export const loadCountriesByRegionSuccess = createAction(
    '[Country API] Load Country By Region Success',
    props<{ countries: Country[] }>()
);

export const loadCountriesByRegionFailure = createAction(
    '[Country API] Load Country By Region Fail',
    props<{ error: string }>()
);