import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private endpoint = 'fruits';

  constructor(private http: HttpService) {
  }

  public getFruits(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  public getFruitById(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get(url);
  }

  public createFruit(fruit: any): Observable<any> {
    return this.http.post(this.endpoint, fruit);
  }

  public updateFruit(id: number, fruit: any): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.http.put(url, fruit);
  }

  public deleteFruit(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.http.delete(url);
  }
}
