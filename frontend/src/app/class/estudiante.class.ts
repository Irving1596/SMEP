export class Estudiante {
	public ced_estudiante: string;
	public password: string;
	public nombre: string;
  public apellido: string;
  public sexo: string;
  public direccion: string;
  public celular: number;
	public ced_profesor: string;
	public id_grupo: string;


	constructor(
		ced_estudiante: string,
		password: string,
		nombre: string,
  	apellido: string,
  	sexo: string,
  	direccion: string,
  	celular: number,
		ced_profesor: string,
		id_grupo: string){

      this.ced_estudiante = ced_estudiante;
      this.password = password;
	    this.nombre = nombre;
     this.apellido = apellido;
      this.sexo = sexo;
       this.direccion = direccion;
       this.celular = celular;
			 this.ced_profesor= ced_profesor;
	     this.id_grupo=id_grupo;
	}
}
  export class Estgrupo {
  public ced_estudiante: string;
  public ced_profesor: string;
  public id_grupo: string;

  constructor(
    ced_estudiante: string,
    ced_profesor: string,
    id_grupo: string
  ) {
    this.ced_estudiante = ced_estudiante;
    this.ced_profesor= ced_profesor;
    this.id_grupo=id_grupo;

  }
}
export class Estprof {
public ced_profesor: string;
public nombre: string;
public apellido: string;

constructor(
  ced_profesor: string,
  nombre: string,
  apellido: string
) {
	console.log("me llamaste");
  this.ced_profesor = ced_profesor;
  this.nombre= nombre;
  this.apellido=apellido;

}

}
