import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryApiActions, CountryPageActions } from './actions';

import { Country } from './../../models/country';
import { CountriesService } from '../../services/countries.service';

@Injectable()
export class CountryEffects {
  constructor(
    private countryService: CountriesService,
    private actions$: Actions
  ) { }


  loadRegions$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(CountryPageActions.loadRegions),
        mergeMap(() => this.countryService.getRegions()
          .pipe(
            map(regions => CountryApiActions.loadRegionSuccess({ regions })),
            catchError(error => of(CountryApiActions.loadRegionFailure({ error })))
          )
        )
      );
  });

  getCountriesByRegions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountryPageActions.getCountriesByRegion),
      mergeMap((action) =>
        this.countryService.getCountriesPerRegion(action.region).pipe(
          map((countries: Country[]) => 
          CountryApiActions.loadCountriesByRegionSuccess({ countries })),
          catchError(error => of(CountryApiActions.loadRegionFailure({ error })))
        )
      )
    )
  });
}
