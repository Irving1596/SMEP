export class Grupo {
	public id_grupo: string;
	public nombre: string;
  public ced_profesor: string;


	constructor(
		id_grupo: string,
		nombre: string,
    ced_profesor: string
){

      this.id_grupo = id_grupo;
	    this.nombre = nombre;
     this.ced_profesor=ced_profesor;
	}

}
