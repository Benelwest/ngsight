import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [350, 450, 120];
  pieChartLabels: string[] = ['xyz Logistics', 'ss', 'sss '];
  colors: any[] = [
    { backgroundColor: ['#456777', '#dfhj799', '#df959j'],
      borderColor: '#111'
    }
  ];

   pieChartType = 'doughnut';

  ngOnInit() {
  }

}
