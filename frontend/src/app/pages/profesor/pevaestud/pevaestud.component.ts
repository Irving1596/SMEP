import { Component, OnInit } from '@angular/core';
import { Pcalestud} from 'src/app/class/profesor.class';
import { Usuario} from 'src/app/class/user.class';
import { ProfesorService } from  'src/app/services/profesor.service';
import { Grupo} from 'src/app/class/grupo.class';
@Component({
  selector: 'app-pevaestud',
  templateUrl: './pevaestud.component.html',
  styleUrls: ['./pevaestud.component.css']
})
export class PevaestudComponent implements OnInit {
  pcalestuds: Pcalestud[] = [];
    usuarios: Usuario;
profesorgrupos: Grupo[] = [];
 id_grupo : string;

  constructor(private profService: ProfesorService) {
    if (localStorage.getItem('usuarios')) {
        this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
        console.log("usrs",this.usuarios);
      }
 }

 pageActual: number = 1;

  ngOnInit() {


    this.profService.getPgrupos( this.usuarios.id_profesor).subscribe(
      (data: Grupo[]) => {
        this.profesorgrupos = data;
        console.log("dataaaa",this.profesorgrupos);
        return data;
      });

    console.log( "cedula ", this.usuarios.id_profesor);
    this.profService.getPcalestuds(this.usuarios. id_profesor).subscribe(
      (data: Pcalestud[]) => {
        this.pcalestuds = data;
        console.log("dataaaa",this.pcalestuds);
        console.log("total item",data.length);
        return data;
      });
  }




}
