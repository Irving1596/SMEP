import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario} from 'src/app/class/user.class';
@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {
   usuarios: Usuario[] = [];
  constructor() {
    if (localStorage.getItem('usuarios')) {
        this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
      }}

  ngOnInit() {
  }

}
