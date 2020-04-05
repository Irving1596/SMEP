import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/catch';
import { catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CalificacionService {
   private baseURL = 'http://localhost:3200/';
   httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};
    constructor(private http: HttpClient) {}

    postCalif(calificacion) {
       let url = this.baseURL+ 'reg_calif';
       console.log('body::::::: ', calificacion);
       return this.http.post(url, calificacion, this.httpOptions)
         .pipe(map(res => {
           console.log('respuestapostttDataaa::', res);
           return res;
         })
         );
     }

     postCalifEst(calificacion_est) {
        let url = this.baseURL+ 'reg_calif_est';
        console.log('body::::::: ', calificacion_est);
        return this.http.post(url, calificacion_est, this.httpOptions)
          .pipe(map(res => {
            console.log('respuestapostttDataaa::', res);
            return res;
          })
          );
      }


  }
