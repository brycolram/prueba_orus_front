import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private endpoint = 'orders';

  constructor(private http: HttpService) {
  }

  public getOrders(): Observable<any> {
    return this.http.get(this.endpoint);
  }


  public createOrder(fruit: any): Observable<any> {
    return this.http.post(this.endpoint, fruit);
  }
}
