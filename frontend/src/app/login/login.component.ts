import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Usuario} from 'src/app/class/user.class';
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public concursantes: any = [];
  public usuarios: Usuario;
  rol: string;
  constructor( private logprof: ApiService , private router: Router) {

  }
  username: string;
  password: string; 

  /*const prof = logprof.getLogin().subscribe(
    (data: Profesor[]) => {
        this.profesores = data;
        console.log(data);
        console.log("nada",data);
        return data;
    });*/
  ngOnInit() {
  }



  valida_user(): void {
    const est = this.logprof.getLoginUser(this.username,this.password).subscribe(
      (data: Usuario) => {
          this.usuarios = data;
          this.guardarStorage('usuarios');     
         if(data.rol=='estudiante'){
              this.router.navigate(['estudiante']);
         }
        else if (data.rol=== 'profesor') {
         this.router.navigate(['profesor']); 
          // console.log(Profesor.rol);
        }
        else if (data.rol=== 'administrador') {
         this.router.navigate(['admin']);
          // console.log(Profesor.rol);
        }
        else {
          alert ('Usuario o contraseña invalida');
        }
        //  return data;
      });
        //console.log("data afuera del geltogin pero adentro de la fun",this.estudiantes);
  }
  guardarStorage(event){
    switch(event){
      case 'usuarios':
        localStorage.setItem('usuarios',JSON.stringify(this.usuarios));
      break;
    }
  }
}
