import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiBaseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiBaseUrl = "https://api.openbrewerydb.org"
   }

  public post<T>(url: string, body?: any): Observable<T> {
    return this.http.post<T>(`${this.apiBaseUrl}${url}`, body);
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.apiBaseUrl}${url}`);
  }

}
