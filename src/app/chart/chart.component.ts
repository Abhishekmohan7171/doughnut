import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        // labels: ['Green', 'Blue', 'Violet'],
        datasets: [{
          // label: '# of Votes',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(136, 252, 107, 1)',
            // 'rgba(14, 68, 225, 1)',
            'rgba(91, 95, 255, 1)',
            'rgba(173, 55, 235, 1)',
            
          ],
          borderColor: [
            'rgba(255,255,255)',
            'rgba(255,255,255)',
            'rgba(255,255,255)',
          ],
          borderWidth: 5
        }]
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true
      //     }
      //   }
      // }
    });
  }

}
