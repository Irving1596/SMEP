import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/1javascript.json', name: 'Ejercicio1' },
      { id: 'data/2aspnet.json', name: 'Ejercicio 2' },
      { id: 'data/3csharp.json', name: 'Ejercicio 3' },
      { id: 'data/4designPatterns.json', name: 'Ejercicio 4' },
      { id: 'data/5designPatterns.json', name: 'Ejercicio 5' },
      { id: 'data/6designPatterns.json', name: 'Ejercicio 6' },
      { id: 'data/7designPatterns.json', name: 'Ejercicio 7' },
      { id: 'data/8designPatterns.json', name: 'Ejercicio 8' },
      { id: 'data/9designPatterns.json', name: 'Ejercicio 9' },
      { id: 'data/10designPatterns.json', name: 'Ejercicio 10' },
      { id: 'data/11designPatterns.json', name: 'Ejercicio 11' },


    ];
  }

}
