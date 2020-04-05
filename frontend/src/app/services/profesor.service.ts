import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/catch';
import { catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfesorService {
   private baseURL = 'http://localhost:3200/';
   httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};
    constructor(private http: HttpClient) {}

//servicio que recibe las calificaciones de los estudiantes
    getPcalestuds(id_profesor) {
 let url = this.baseURL+ 'estud_calif_list/' +id_profesor;
 return this.http.get(url).pipe(
   map(resData => {
     console.log('estud_calif_list-resData:: ', resData);
     return resData;
   })
 );
}

//servicio que recibe las estadisticas de las calificaciones, obtenidas por los estudiantes
    getPcalestudsgraf(id_profesor) {
 let url = this.baseURL+ 'estud_calif_graf/' +id_profesor;
 return this.http.get(url).pipe(
   map(resData => {
     console.log('estud_calif_graf-resData:: ', resData);
     return resData;
   })
 );
}

getPcaltems(id_profesor) {
let url = this.baseURL+ 'tem_calif_list/' +id_profesor;
return this.http.get(url).pipe(
map(resData => {
 console.log('tem_calif_list-resData:: ', resData);
 return resData;
})
);
}

getPgrupos(id_profesor) {
let url = this.baseURL+ 'grup_list/' +id_profesor;
return this.http.get(url).pipe(
map(resData => {
 console.log('grupo_list-resData:: ', resData);
 return resData;
})
);
}



  }
