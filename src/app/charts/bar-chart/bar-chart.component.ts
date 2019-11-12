import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  {data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Saels'},
  {data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Saels'}
];

const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any ={
    scaledShowVerticalLines: false,
    respnsive: true
  };

  ngOnInit() {
  }

}
