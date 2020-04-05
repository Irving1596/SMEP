import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { Profesor} from 'src/app/class/profesor.class';
import { MatSnackBar } from '@angular/material';
import { ApiService } from  'src/app/services/api.service';

@Component({
  selector: 'app-regisprof1',
  templateUrl: './regisprof1.component.html',
  styleUrls: ['./regisprof1.component.scss']
})
export class Regisprof1Component implements OnInit {
    profesores: Profesor[] = [];
  select_sexo: string;
    sexos: string[] = ['M', 'F'];
  radioOptions: string = 'TEST1';
  sexo: string;
 M = 'M';
 F = 'F';


   cedula: string ;

   password: string;
   nombre: string;
   apellido: string;
   direccion: string;
   correo: string;
   celular: number;

  constructor(private regprof: ApiService ,public snackBar: MatSnackBar) {
    if(localStorage.getItem('profesores')){
      this.profesores = JSON.parse(localStorage.getItem('profesores'));

    }
  }

  ngOnInit() {
  }

  f_crear_profesor(){

    if(!this.cedula || !this.password || !this.nombre ||!this.apellido||!this.sexo ||!this.direccion ||!this.correo ||!this.celular ) return;
    const nuevoProf = new Profesor( this.cedula, this.password, this.nombre, this.apellido,this.sexo,this.direccion,this.correo,this.celular);

        this.profesores.push(nuevoProf);
        this.guardarStorage('profesores');
        if(!this.nuevoProf){
        this.snackBar.open('', '¡Se a creado, correctamente!', {duration: 3000});
      }
  }

  f_borrar_profesor(i :number){
  this.profesores.splice(i,1);
  this.guardarStorage('profesores');
  this.snackBar.open('', 'Profesor borrado correctamente', {duration: 3000});
}

f_editar_profesor(profesor:Profesor){
  /*const dialogRef = this.dialog.open(CrearComponent, {
    width: '300px',
    data: {
      go_data: 28,
      v_unidad_academica: catedra.v_unidad_academica,
      v_area_conocimiento: catedra.v_area_conocimiento,
      v_cantidad: catedra.v_cantidad,
      v_desc: catedra.v_desc
    }
  });

  dialogRef.afterClosed().subscribe(result => {
*/
this.cedula= profesor.ced_profesor;
this.password= profesor.password;
this.nombre= profesor.nombre;
this.apellido= profesor.apellido;
this.sexo= profesor.sexo;
this.direccion= profesor.direccion;
this.correo= profesor.correo;
this.celular= profesor.celular;

  if(!this.cedula || !this.password || !this.nombre ||!this.apellido||!this.sexo ||!this.direccion ||!this.correo ||!this.celular ) return;

  profesor.ced_profesor =this.cedula;
  profesor.password = this.password;
  profesor.nombre = this.nombre;
  profesor.apellido = this.apellido;
  profesor.sexo = this.sexo;
  profesor.direccion = this.direccion;
  profesor.correo = this.correo;
  profesor.celular = this.celular;
  this.guardarStorage('profesores');
  this.snackBar.open('', 'Profesor actualizado', {duration: 3000}); 


}


  registra_profesor(){
    const prof = this.regprof.postReg_Prof(this.profesores).subscribe(
      (data: Profesor[]) => {
        console.log("data",data);
        if(data!=null){
            this.snackBar.open('', 'Profesores Registrados correctamente', {duration: 3000});
      }
  });
}

guardarStorage(event){ 
  switch(event){
    case 'profesores':
      localStorage.setItem('profesores',JSON.stringify(this.profesores));
    break;
  }
}

}
