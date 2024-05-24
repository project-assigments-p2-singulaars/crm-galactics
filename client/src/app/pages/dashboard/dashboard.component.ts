import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from '../../services/dashboard.service';
import { MonthlySale, Sale } from '../../interfaces/charts';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  chartData: MonthlySale[] = [];
  labelData: string[] = [];
  realData: number[] = [];

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData() {
    this.service.loadMonthlySalesData().subscribe(
      (data: MonthlySale[]) => {
        console.log('Loaded data:', data); // Log para verificar los datos cargados
        this.chartData = data || [];
        if (this.chartData.length > 0) {
          this.chartData.forEach((item: MonthlySale) => {
            this.labelData.push(item.month);
            const totalSales = item.sales.reduce(
              (sum: number, sale: Sale) => sum + sale.quantity,
              0
            );
            this.realData.push(totalSales);
          });
          console.log('Labels:', this.labelData); // Log para verificar los labels
          console.log('Sales data:', this.realData); // Log para verificar los datos de ventas
          this.renderChart();
        }
      },
      (error) => {
        console.error('Error loading chart data', error);
      }
    );
  }

  renderChart() {
    const canvas = document.getElementById('barchart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.labelData,
            datasets: [
              {
                label: 'Monthly Sales',
                data: this.realData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      } else {
        console.error('Failed to get 2D context from canvas');
      }
    } else {
      console.error('Canvas element not found');
    }
  }
}
