export class Usuario {
public cedula: string;
public rol: string;
public nombre: string;
public id_estudiante: string;
public id_profesor: string;

constructor(
cedula: string,
rol: string,
nombre: string,
id_estudiante: string,
id_profesor: string

) {

this.cedula = cedula;
this.rol = rol;
this.nombre = nombre;
this.id_estudiante = id_estudiante;
this.id_profesor = id_profesor;

}

}
