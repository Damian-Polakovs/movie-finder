import { Injectable } from '@angular/core';

import{HttpClient,HttpErrorResponse} from "@angular/common/http";
import {Observable,throwError} from 'rxjs';
import {catchError,tap} from 'rxjs';
import {IOMDBResponse} from '../omdbresponse';
import { IOMDBResponse2 } from '../omdbmresponse2';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  private _siteURL="https://www.omdbapi.com/"
  private _key="bd621f25"
  private _key2="?apikey=fa53e047&s="
 

  constructor(private _http:HttpClient) { }

  private handleError(err: HttpErrorResponse): Observable<never> {
    console.error('OmdbApiService:', err);
    return throwError(`OmdbApiService: ${err.error}`);
  }

  getMovieData(movieName:string):Observable<IOMDBResponse>{
    return this._http.get<IOMDBResponse>(this._siteURL+ this._key + movieName)
    .pipe(
      tap(data=>console.log('Moviedata/error'+JSON.stringify(data))),
      catchError(this.handleError)

    );
  }
}
