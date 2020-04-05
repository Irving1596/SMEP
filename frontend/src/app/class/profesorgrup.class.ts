export class Profesorgrup {
	public ced_profesor: string;
	public nombre: string;
  public apellido: string;


	constructor(
		ced_profesor: string,
		nombre: string,
  	apellido: string,
){

      this.ced_profesor = ced_profesor;
	    this.nombre = nombre;
     this.apellido = apellido;

	}

}
