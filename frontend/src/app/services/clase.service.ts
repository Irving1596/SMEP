import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/catch';
import { catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClaseService {
   private baseURL = 'http://localhost:3200/';
   httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};
    constructor(private http: HttpClient) {}

    postReg_Clas(clase) {
       let url = this.baseURL+ 'reg_clas';
       console.log('body::::::: ', clase);
       return this.http.post(url, clase, this.httpOptions)
         .pipe(map(res => {
           console.log('respuestapostttDataaa::', res);
           return res;
         })
         );
     }

     getProfesor(){
            let url = this.baseURL+ 'prof_grup_list';
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


  }
