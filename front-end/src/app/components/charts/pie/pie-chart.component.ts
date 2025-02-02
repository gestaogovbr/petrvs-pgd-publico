import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: [ './pie-chart.component.scss' ],
})
export class PieChartComponent {
  @Input() pieChartOptions: ChartOptions = {};
  @Input() pieChartData: ChartDataset[] = [];
  @Input() pieChartType: ChartType = 'doughnut';
  @Input() pieChartPlugins = [ ChartDataLabels ];

  public pieChartLegend = true;
  public pieChartLabels = [];

  constructor() { }

  ngOnInit() {
  }
}
