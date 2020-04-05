export class Calftema {
	public id: number;
	public cod_tema: number;
  public puntos_max: number;
  public puntos_obt: number;
  public completado: number;
  public calificacion: number;
  public id_estudiante: string;
  public fecha: Date;
  public insertId: number;

	constructor(
		cod_tema: number,
    puntos_max: number,
    puntos_obt: number,
    calificacion: number
){

	   this.cod_tema = cod_tema;
     this.puntos_max=puntos_max;
     this.puntos_obt=puntos_obt;
     this.calificacion=calificacion;
	}

}
