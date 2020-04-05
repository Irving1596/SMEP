import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/catch';
import { catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EstudianteService {
   private baseURL = 'http://localhost:3200/';
   httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};
    constructor(private http: HttpClient) {}

    postReg_Estudiante(estudiante) {
       let url = this.baseURL+ 'reg_est';
       console.log('body::::::: ', estudiante);
       return this.http.post(url, estudiante, this.httpOptions)
         .pipe(map(res => {
           console.log('respuestapostttDataaa::', res);
           return res;
         })
         );
     }

     postReg_Estudiante_Grup(estudiante) {
        let url = this.baseURL+ 'reg_est_grup';
        console.log('body::::::: ', estudiante);
        return this.http.post(url, estudiante, this.httpOptions)
          .pipe(map(res => {
            console.log('respuestapostttDataaa::', res);
            return res;
          })
          );
      }

     getGrupos(){
            let url = this.baseURL+ 'grup_list';
     return this.http.get(url).pipe(
     map(respuestaData => {
       console.log('respuestaDataaaa::', respuestaData);
       return respuestaData;
     }),
           // "catchError" instead "catch"
           catchError(error => {
                   return throwError(error.message);
                 })
     );
     }

     getProfesor(cod_grupo) {
  let url = this.baseURL+ 'prof_grup_list/' +cod_grupo;
  return this.http.get(url).pipe(
    map(resData => {
      console.log('cat_fac-resData:: ', resData);
      return resData;
    })
  );
}


  }
