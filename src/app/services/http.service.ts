import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/${url}`;
    return this.http.get(apiUrl);
  }

  public post(url: string, data: any): Observable<any> {
    const apiUrl = `${this.baseUrl}/${url}`;
    return this.http.post(apiUrl, data);
  }

  public put(url: string, data: any): Observable<any> {
    const apiUrl = `${this.baseUrl}/${url}`;
    return this.http.put(apiUrl, data);
  }

  public delete(url: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/${url}`;
    return this.http.delete(apiUrl);
  }
}
