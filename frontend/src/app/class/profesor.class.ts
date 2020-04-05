export class Profesor {
	public id: number;
	public ced_profesor: string;
	public password: string;
	public nombre: string;
  public apellido: string;
  public sexo: string;
  public direccion: string;
  public correo: string;
  public celular: number;


	constructor(
		ced_profesor: string,
		password: string,
		nombre: string,
  	apellido: string,
  	sexo: string,
  	direccion: string,
  	correo: string,
  	celular: number){

      this.ced_profesor = ced_profesor;
      this.password = password;
	    this.nombre = nombre;
     this.apellido = apellido;
      this.sexo = sexo;
       this.direccion = direccion;
      this.correo = correo;
       this.celular = celular;

	}

}

export class ProfesorUpdate {
	public id: number;
	public ced_profesor: string;
	public password: string;
	public nombre: string;
  public apellido: string;
  public sexo: string;
  public direccion: string;
  public correo: string;
  public celular: number;


	constructor(
		id: number,
		ced_profesor: string,
		password: string,
		nombre: string,
  	apellido: string,
  	sexo: string,
  	direccion: string,
  	correo: string,
  	celular: number){

			this.id=id;
      this.ced_profesor = ced_profesor;
      this.password = password;
	    this.nombre = nombre;
     this.apellido = apellido;
      this.sexo = sexo;
       this.direccion = direccion;
      this.correo = correo;
       this.celular = celular;

	}

}

export class Pcalestud {
public id_estudiante: string;
public nombre: string;
public apellido: string;
public nombre_tema: string;
public id_unidad: number;
public puntos_obt: number;
public puntos_max: number;
public calificacion: number;

constructor(
	id_estudiante: string,
	nombre: string,
	apellido: string,
	nombre_tema: string,
	id_unidad: number,
	puntos_obt:number,
	puntos_max:number,
	calificacion: number
) {
	this.id_estudiante = id_estudiante;
	this.nombre= nombre;
	this.apellido=apellido;
	this.nombre_tema=nombre_tema;
	this.id_unidad=id_unidad;
	this.puntos_obt=puntos_obt;
	this.puntos_max=puntos_max;
	this.calificacion=calificacion;

}
}

export class Pcaltem {
public nombre_tema: string;
public aprobados: number;
public reprobados: number;
public total: number;
public rendimiento: number;

constructor(
	nombre_tema: string,
	aprobados: number,
	reprobados:number,
	total:number,
	rendimiento: number
) {
	this.nombre_tema=nombre_tema;
	this.aprobados=aprobados;
	this.reprobados=reprobados;
	this.total=total;
	this.rendimiento=rendimiento;

}
}

export class Pcalestudgraf {
public id_grupo: string;
public ced_profesor: string;
public uno: number;
public dos: number;
public tres: number;
public cuatro: number;
public cinco: number;

constructor(
	id_grupo: string,
	ced_profesor: string,
	uno:number,
	dos:number,
	tres: number,
	cuatro: number,
	cinco: number
) {
	this.id_grupo=id_grupo;
	this.ced_profesor=ced_profesor;
	this.uno=uno;
	this.dos=dos;
	this.tres=tres;
  this.cuatro=cuatro;
	this.cinco=cinco;

}
}
