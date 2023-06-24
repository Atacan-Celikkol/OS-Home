import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {environment} from 'src/environment/environment';
import {CurrenciesResponse} from '../models/currency';

const Endpoints = {
  BaseUrl: '',
  GetLatest: () =>
    `${Endpoints.BaseUrl}/latest?base=try&_=${Date.now()}`,
};

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private httpClient: HttpClient) {
    Endpoints.BaseUrl = environment.currencyApiUrl;
  }

  getCurrencies(): Observable<CurrenciesResponse> {
    const url = Endpoints.GetLatest();

    return this.httpClient.get<CurrenciesResponse>(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  //#region Should be moved to a base service
  handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = err.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(errorMessage);
  }

  //#endregion
}
