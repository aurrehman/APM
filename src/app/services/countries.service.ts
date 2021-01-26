import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


import { Region } from '../models/region';
import { Country } from '../models/country';

@Injectable()

export class CountriesService {

  private headers: HttpHeaders;
  private regionsUrl = 'api/regions';
  private restcountriesUrl = 'https://restcountries.eu/rest/v2/region/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

 public getRegions(): Observable<Region[]> {
    return of(this.getRegionsData())
  }

  private getRegionsData(): Region[] {
    let regions: Region[] = [
      {
        name: 'Europe'
      },
      {
        name: "Asia"
      }
    ];
    return regions;
  }

 public getCountriesPerRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.restcountriesUrl}${region}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
