import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup,ControlValueAccessor,FormControl} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { Estudiante,Estgrupo,Estprof} from 'src/app/class/estudiante.class';
import { Grupo} from 'src/app/class/grupo.class';
import { MatSnackBar } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EstudianteService } from  'src/app/services/estudiante.service';
@Component({
  selector: 'app-regisest1',
  templateUrl: './regisest1.component.html',
  styleUrls: ['./regisest1.component.scss']
})
export class Regisest1Component implements OnInit, ControlValueAccessor{
  writeValue() { }
    registerOnChange(_fn: any) { }
    registerOnTouched(_fn: any) { }
    _onChange() { }
  estudiantesgrupo: Grupo[] = [];
  estgrupos: Estgrupo[] = [];
  estprofs: Estprof[] = [];
  estudiantes: Estudiante[] = [];
sexo: string;
M = 'M';
F = 'F';
profesor: string;

 cedula: string ;
 password: string;
 nombre: string;
 apellido: string;
 direccion: string;
 celular: number;


 id_grupo : string;
 ced_profesor : string;

constructor(private regest: EstudianteService ,public snackBar: MatSnackBar) {
  if(localStorage.getItem('estudiantes')){
    this.estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
  }
  if(localStorage.getItem('estgrupos')){
    this.estgrupos = JSON.parse(localStorage.getItem('estgrupos'));
  }
}

ngOnInit() {
  this.regest.getGrupos().subscribe(
    (data: Grupo[]) => {
      this.estudiantesgrupo = data;
      console.log("dataaaa",this.estprofs);
      return data;
    });
}

crear_estudiante(){

  if(!this.cedula || !this.password || !this.nombre ||!this.apellido||!this.sexo ||!this.direccion ||!this.celular||!this.id_grupo ) return;
  console.log("nombre del prof",this.profesor);
  const nuevoEst = new Estudiante( this.cedula, this.password, this.nombre, this.apellido,this.sexo,this.direccion,this.celular,this.estprofs[0].ced_profesor, this.id_grupo);
console.log(nuevoEst);
      this.estudiantes.push(nuevoEst);
            this.guardarStorage('estudiantes');
      const nuevoEstGrup = new Estgrupo(this.cedula,this.estprofs[0].ced_profesor, this.id_grupo);
          this.estgrupos.push(nuevoEstGrup);
          this.guardarStorage('estgrupos');
                    console.log("grupo del estudiante",nuevoEstGrup);
      this.snackBar.open('¡Se a creado, correctamente!', 'Cerrar', {duration: 3000});
}

borrar_estudiante(i :number){
this.estudiantes.splice(i,1);
this.guardarStorage('estudiantes');
this.snackBar.open('', 'Estudiante borrado, correctamente', {duration: 5000});
}

editar_estudiante(estudiante:Estudiante,estprof:Estprof){
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
this.cedula= estudiante.ced_estudiante;
this.password= estudiante.password;
this.nombre= estudiante.nombre;
this.apellido= estudiante.apellido;
this.sexo= estudiante.sexo;
this.direccion= estudiante.direccion;
this.celular= estudiante.celular;
this.id_grupo=estudiante.id_grupo;
if(!this.cedula || !this.password || !this.nombre ||!this.apellido||!this.sexo ||!this.direccion ||!this.celular||!this.id_grupo ) return;
  estudiante.ced_estudiante = this.cedula;
  estudiante.password = this.password;
  estudiante.nombre = this.nombre;
  estudiante.apellido = this.apellido;
  estudiante.sexo = this.sexo;
  estudiante.direccion = this.direccion;
  estudiante.celular = this.celular;
  estudiante.id_grupo=this.id_grupo
  this.guardarStorage('estudiantes');
    //this.snackBar.open('Estudiante actualizado', 'Cerrar', {duration: 3000});


}


registra_estudiante(){
  const est = this.regest.postReg_Estudiante(this.estudiantes).subscribe(
    (data: Estudiante[]) => {
      console.log("data",data);
});
const est_grup = this.regest.postReg_Estudiante_Grup(this.estudiantes).subscribe(
  (data: Estudiante[]) => {
    console.log("data",data);
});
    this.snackBar.open('Estudiantes Registrados', 'Cerrar', {duration: 4000});
}

guardarStorage(event){
switch(event){
  case 'estudiantes':
    localStorage.setItem('estudiantes',JSON.stringify(this.estudiantes));
  break;
  case 'estgrupos':
    localStorage.setItem('estgrupos',JSON.stringify(this.estgrupos));
  break;
}
}

//captura_grupo() {
      // Pasamos el valor seleccionado a la variable verSeleccion
  //    this.estgrupos.id_grupo= this.id_grupo;
  //}

  eventGrupo(event) {
    let cod_grupo;
    this.estudiantesgrupo.forEach((e) => {
      if (e.id_grupo == this.id_grupo) {
        console.log("valor de e",e);
        this.id_grupo=e.id_grupo;
        cod_grupo= e.ced_profesor;
        this.regest.getProfesor(cod_grupo).subscribe(
          (data: Estprof[]) => {
            this.estprofs = data;
            this.profesor=  this.estprofs[0].nombre;

            return data;
          });
        console.log('adasdasdfasd,jhgasdkjhagskjhgasd', cod_grupo);
      }
    });

    console.log(event);

}


}
