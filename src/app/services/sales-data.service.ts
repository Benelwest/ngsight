import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  constructor(private http: HttpClient) { }

  getOrders(pageIndex: number, pageSize: number) {
    return this.http.get('http://localhost:5000/api/order/' + pageIndex + '/' + pageSize)
     // .map(res => res.json());
     // .map((res: Response) => res.json());
      .map(res => res);
  }
}
