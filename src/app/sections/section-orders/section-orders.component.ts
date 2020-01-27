import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';
import { SalesDataService } from '../../services/sales-data.service';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

 constructor(private salesData: SalesDataService) { }

 /*  orders: Order[] = [
    {id: 1, customer:
      {id: 1 , name: 'test33', state: 'CO', email: 'main@example.ch'},
      total: 230, placed: new Date(2017, 12, 1), fulfilles: new Date(2017, 12, 3)},
    {id: 2, customer:
        {id: 2 , name: 'test22', state: 'CO', email: 'main@example.ch'},
        total: 230, placed: new Date(2017, 12, 1), fulfilles: new Date(2017, 12, 3)},
    {id: 3, customer:
          {id: 2 , name: 'test22dd', state: 'CO', email: 'main@example.ch'},
          total: 230, placed: new Date(2017, 12, 1), fulfilles: new Date(2017, 12, 3)}
  ]; */

  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.salesData.getOrders(this.page, this.limit)
    .subscribe(res => {
      console.log('Result from getOrders:', res);
      this.orders = res['page'.toString()]['data'.toString()];
      this.total = res['page'.toString()].total;
      this.loading = false;
    });
  }


  goToPrevious(): void {
    // console.log('Previous Button Clicked!');
    this.page--;
    this.getOrders();
  }

  goToNext(): void {
    // onsole.log('Previous Button Clicked!');
    this.page++;
    this.getOrders();
  }
  goToPage(n: number): void {
    this.page = n;
    this.getOrders();
}
}
