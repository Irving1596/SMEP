import { Component, OnInit } from '@angular/core';
import { Pcalestudgraf} from 'src/app/class/profesor.class';
import { Usuario} from 'src/app/class/user.class';
import { ProfesorService } from  'src/app/services/profesor.service';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {
  pcalestudgrafs: Pcalestudgraf[] = [];
    usuarios: Usuario[] = [];
    graf=[];
  public chartType: string = 'line';
  public chartDatasets = [
      { data: [1,33,44,55,22], label: 'Estudiante'},
      { data: [22,33,44,22,11], label: 'Tema' }
    ];
/*
 public chartDatasets= [
  { data: [65, 59, 80, 81, 56], label: 'Estudiante' },
  { data: [30, 10, 40, 50, 2], label: 'Tema' },
];*/


  public chartLabels: Array<any> = ['1', '2', '3', '4', '5'];

  public chartColors: Array<any> = [
    {
   backgroundColor: 'rgba(105, 0, 132, .2)',
   borderColor: 'rgba(200, 99, 132, .7)',
   borderWidth: 2,
 },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(54, 162, 235, 0.7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgb(113, 242, 229)',
      borderColor: 'rgb(28, 142, 130)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }



  constructor(private profService: ProfesorService) {
  if (localStorage.getItem('usuarios')) {
      this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }
}
  ngOnInit() {
    if (localStorage.getItem('graf')) {
        this.graf = JSON.parse(localStorage.getItem('graf'));
        this.chartDatasets=this.graf;
      }
  }

}
