import { Component, OnInit } from '@angular/core';
import { Usuario} from 'src/app/class/user.class';
import { Pcalestudgraf} from 'src/app/class/profesor.class';
import { ProfesorService } from  'src/app/services/profesor.service';
@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
usuarios: Usuario ;
pcalestudgrafs: Pcalestudgraf[] = [];
  graf=[];
  constructor(private profService: ProfesorService) {
  if(localStorage.getItem('usuarios')){
          this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
        }
      }

  ngOnInit() {
  //  localStorage.removeItem('graf');
console.log("useeeee",this.usuarios.id_profesor);
      this.profService.getPcalestudsgraf(this.usuarios.id_profesor).subscribe(
        (data: Pcalestudgraf[]) => {
          this.pcalestudgrafs = data;
          for(var i=0; i<data.length; i++){
            this.graf.push({data:[data[i].uno,data[i].dos,data[i].tres,data[i].cuatro,data[i].cinco],label: data[i].id_grupo});
          }

                this.guardarStorage('graf');
               //this.chartDatasets=this.graf;
        //  console.log("charlabel",this.chartDatasets);
          return data;
        });
  }
  guardarStorage(event){
  switch(event){
    case 'graf':
      localStorage.setItem('graf',JSON.stringify(this.graf));
    break;

  }
  }

}
