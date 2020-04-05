import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { Profesor,ProfesorUpdate} from 'src/app/class/profesor.class';
import { MatSnackBar } from '@angular/material';
import { ApiService } from  'src/app/services/api.service';

@Component({
  selector: 'app-bdprof1',
  templateUrl: './bdprof1.component.html',
  styleUrls: ['./bdprof1.component.scss']
})
export class Bdprof1Component implements OnInit {
profesores: Profesor[]=[];
profs: ProfesorUpdate[]=[];
sexo: string;
M = 'M';
F = 'F';

 id: number ;
 cedula: string ;

 password: string;
 nombre: string;
 apellido: string;
 direccion: string;
 correo: string;
 celular: number;
  constructor(private list_prof:ApiService,public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getprofesores();
  }

  getprofesores(){
    this.list_prof.getAllProfesor().subscribe((data: Profesor[])=>{
this.profesores=data;
console.log("dataaaa",this.profesores);
  return data;
    });
  }


updateprofesores(profesor){

  const prof = this.list_prof.putAct_Prof(this.profs).subscribe((data:ProfesorUpdate[])=>{
    console.log("data",data);
        this.getprofesores();
        this.profs.pop();
  });
}
  f_editar_profesor(profesor:ProfesorUpdate){

  this.id=profesor.ID;
  this.cedula= profesor.ced_profesor;
  this.password= profesor.password;
  this.nombre= profesor.nombre;
  this.apellido= profesor.apellido;
  this.sexo= profesor.sexo;
  this.direccion= profesor.direccion;
  this.correo= profesor.correo;
  this.celular= profesor.celular;
}
f_update_profesor(){
    if(!this.cedula || !this.password || !this.nombre ||!this.apellido||!this.sexo ||!this.direccion ||!this.correo ||!this.celular ) return;
    this.profs.id =this.id;
    this.profs.ced_profesor =this.cedula;
    this.profs.password = this.password;
    this.profs.nombre = this.nombre;
    this.profs.apellido = this.apellido;
  this.profs.sexo = this.sexo;
  this.profs.direccion = this.direccion;
  this.profs.correo = this.correo;
  this.profs.celular = this.celular;
    const updateProf = new ProfesorUpdate( this.id,this.cedula, this.password, this.nombre, this.apellido,this.sexo,this.direccion,this.correo,this.celular);

        this.profs.push(updateProf);
        console.log("prof en update",this.profs);

    this.updateprofesores(this.profs);
    //this.guardarStorage('profesores');
    this.snackBar.open('', 'Profesor actualizado', {duration: 3000});


  }

  f_borrar_profesor(profesor: ProfesorUpdate){
    this.id=profesor.ID;
    this.list_prof.delProfesor(this.id).subscribe((data: ProfesorUpdate[])=>{
this.getprofesores();
  this.snackBar.open('', 'Profesor borrado correctamente', {duration: 3000});
  return data;
    });
  }

}
