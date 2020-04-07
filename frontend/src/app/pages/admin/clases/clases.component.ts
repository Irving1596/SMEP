import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaseService } from  'src/app/services/clase.service';
import { Profesorgrup} from 'src/app/class/profesorgrup.class';
import { Grupo} from 'src/app/class/grupo.class';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {
  public profesoresgrup: Profesorgrup[] = [];
    public grupos: Grupo[] = [];
      ced_profesor : string;
  constructor(private grupo: ClaseService , private router: Router, public snackBar: MatSnackBar) {
    if(localStorage.getItem('grupos')){
      this.grupos = JSON.parse(localStorage.getItem('grupos'));

    }
   }
  id_clase: string;
  nombre: string;
  seleccion : string;
  ngOnInit() {
    this.grupo.getProfesor().subscribe(
      (data: Profesorgrup[]) => {
        this.profesoresgrup = data;
        console.log("dataaaa",this.profesoresgrup);
        return data;
      });
  }

  crear_clase(){

    if(!this.id_clase || !this.nombre || !this.grupos) return;
    const nuevoGrup = new Grupo( this.id_clase, this.nombre, this.ced_profesor);
console.log("dfjfjf",this.grupos);
        this.grupos.push(nuevoGrup);
        this.guardarStorage('grupos');
        if(!nuevoGrup){
        this.snackBar.open('', '¡Grupo creado correctamente!', {duration: 3000});
      }
      //  this.snackBar.open('¡Se a creado, correctamente!', 'Cerrar', {duration: 3000});
  }

  editar_clase(grupo:Grupo){
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
  this.id_clase= grupo.id_grupo;
  this.nombre=grupo.nombre;
  this.ced_profesor=grupo.ced_profesor;
    if(!this.id_clase || !this.nombre || !this.grupos) return;
    grupo.id_grupo= this.id_clase;
    grupo.nombre= this.nombre;
    grupo.ced_profesor= this.ced_profesor;
      this.guardarStorage('grupos');
      //this.snackBar.open('Clase actualizada', 'Cerrar', {duration: 3000});


  }


  borrar_clase(i :number){
  this.grupos.splice(i,1);
  this.guardarStorage('grupos');
  this.snackBar.open('', 'Clase borrada correctamente', {duration: 3000}); 
}

registra_clase(){
  const clas = this.grupo.postReg_Clas(this.grupos).subscribe(
    (data: Grupo[]) => {
      console.log("data",data);
});

  this.snackBar.open('', 'Clases creadas correctamente', {duration: 5000}); 
}



  captura_prof() {
            console.log("valor de cedula",this.ced_profesor);
        // Pasamos el valor seleccionado a la variable verSeleccion
        //this.grupos.ced_profesor= this.ced_profesor;
    }

  guardarStorage(event){
    switch(event){
      case 'grupos':
        localStorage.setItem('grupos',JSON.stringify(this.grupos));
      break;
    }
  }
}
