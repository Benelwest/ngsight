import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';
import { Customer } from '../../shared/customer';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer:
      {id: 1 , name: 'test33', state: 'CO', email: 'main@example.ch'},
      total: 230, placed: new Date(2017, 12, 1), fulfilles: new Date(2017, 12, 3)},
    {id: 2, customer:
        {id: 2 , name: 'test22', state: 'CO', email: 'main@example.ch'},
        total: 230, placed: new Date(2017, 12, 1), fulfilles: new Date(2017, 12, 3)},
    {id: 3, customer:
          {id: 2 , name: 'test22dd', state: 'CO', email: 'main@example.ch'},
          total: 230, placed: new Date(2017, 12, 1), fulfilles: new Date(2017, 12, 3)}

  ];
  ngOnInit() {
  }

}
