import { Component, OnInit } from '@angular/core';
import { Pcaltem} from 'src/app/class/profesor.class';
import { Usuario} from 'src/app/class/user.class';
import { ProfesorService } from  'src/app/services/profesor.service';
import { Grupo} from 'src/app/class/grupo.class';
@Component({
  selector: 'app-pevatema',
  templateUrl: './pevatema.component.html',
  styleUrls: ['./pevatema.component.css']
})
export class PevatemaComponent implements OnInit {
  pcaltems: Pcaltem[] = [];
    usuarios: Usuario[] = [];
    profesorgrupos: Grupo[] = [];
     id_grupo : string;
  constructor(private profService: ProfesorService) {
    if (localStorage.getItem('usuarios')) {
        this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
        console.log("usrs",this.usuarios);
      }
 }
  ngOnInit() {
    this.profService.getPgrupos( this.usuarios.id_profesor).subscribe(
      (data: Grupo[]) => {
        this.profesorgrupos = data;
        console.log("dataaaa",this.profesorgrupos);
        return data;
      });

    console.log("cedula",this.usuarios.id_profesor);
    this.profService.getPcaltems(this.usuarios.id_profesor).subscribe(
      (data: Pcaltem[]) => {
        this.pcaltems = data;
        console.log("dataaaa",this.pcaltems);
        console.log("total item",data.length);
        return data;
      });
  }

}
