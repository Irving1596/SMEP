import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
// RUTAS DEL ESTUDIANTE
import { Uni1Component } from './pages/unidades/uni1/uni1.component';
import { Uni2Component } from './pages/unidades/uni2/uni2.component';
import { Uni3Component } from './pages/unidades/uni3/uni3.component';
// Temas del ESTUDIANTE
import { U1tema1Component } from './pages/utemas/u1tema1/u1tema1.component';
import { U1tema2Component } from './pages/utemas/u1tema2/u1tema2.component';
import { U1tema3Component } from './pages/utemas/u1tema3/u1tema3.component';
import { U1tema4Component } from './pages/utemas/u1tema4/u1tema4.component';
import { U2tema1Component } from './pages/utemas/u2tema1/u2tema1.component';
import { U3tema1Component } from './pages/utemas/u3tema1/u3tema1.component';
import { U3tema2Component } from './pages/utemas/u3tema2/u3tema2.component';
import { U3tema3Component } from './pages/utemas/u3tema3/u3tema3.component';
import { U3tema4Component } from './pages/utemas/u3tema4/u3tema4.component';
import { U3tema5Component } from './pages/utemas/u3tema5/u3tema5.component';
import { U3tema6Component } from './pages/utemas/u3tema6/u3tema6.component';
// RUTAS DE EJERCICIOS
import { QuizComponent } from './quiz/quiz.component';
import { Quiz2Component } from './quiz2/quiz2.component';
import { Quiz3Component } from './quiz3/quiz3.component';
import { Quiz4Component } from './quiz4/quiz4.component';
import { Quiz5Component } from './quiz5/quiz5.component';
import { Quiz6Component } from './quiz6/quiz6.component';
import { Quiz7Component } from './quiz7/quiz7.component';
import { Quiz8Component } from './quiz8/quiz8.component';
import { Quiz9Component } from './quiz9/quiz9.component';
import { Quiz10Component } from './quiz10/quiz10.component';
import { Quiz11Component } from './quiz11/quiz11.component';
// RUTAS DEL ADMIN
import { AdmiComponent } from './pages/admin/admi/admi.component';
import { ClasesComponent } from './pages/admin/clases/clases.component';
import { Regisest1Component } from './pages/admin/regisest1/regisest1.component';
import { Bdprof1Component } from './pages/admin/bdprof1/bdprof1.component';
import { Regisprof1Component } from './pages/admin/regisprof1/regisprof1.component';
import { RegistroestudComponent } from './pages/admin/registroestud/registroestud.component';
import { RegistroprofComponent } from './pages/admin/registroprof/registroprof.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { PevatemaComponent } from './pages/profesor/pevatema/pevatema.component';
import { PevaestudComponent } from './pages/profesor/pevaestud/pevaestud.component';


const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login'  , pathMatch:  'full' },

   // RUTAS DEL ESTUDIANTE
   { path: 'estudiante', component: EstudianteComponent},
   { path: 'u1', component: Uni1Component},
   { path: 'u2', component: Uni2Component},
   { path: 'u3', component: Uni3Component},
     // Temas del ESTUDIANTE
     { path: 'u1tema1', component: U1tema1Component},
     { path: 'u1tema2', component: U1tema2Component},
     { path: 'u1tema3', component: U1tema3Component},
     { path: 'u1tema4', component: U1tema4Component},
     { path: 'u2tema1', component: U2tema1Component},
     { path: 'u3tema1', component: U3tema1Component},
     { path: 'u3tema2', component: U3tema2Component},
     { path: 'u3tema3', component: U3tema3Component},
     { path: 'u3tema4', component: U3tema4Component},
     { path: 'u3tema5', component: U3tema5Component},
     { path: 'u3tema6', component: U3tema6Component},
      // RUTAS DE EJERCICIOS
    { path: 'u1tem1eje1', component: QuizComponent},
    { path: 'u1tem2eje1', component: Quiz2Component},
    { path: 'u1tem3eje1', component: Quiz3Component},
    { path: 'u1tem4eje1', component: Quiz4Component},
    { path: 'u2tem1eje1', component: Quiz5Component},
    { path: 'u3tem1eje1', component: Quiz6Component},
    { path: 'u3tem2eje1', component: Quiz7Component},
    { path: 'u3tem3eje1', component: Quiz8Component},
    { path: 'u3tem4eje1', component: Quiz9Component},
    { path: 'u3tem5eje1', component: Quiz10Component},
    { path: 'u3tem6eje1', component: Quiz11Component},
       // RUTAS DEL ADMIN
       { path: 'admin', component: AdmiComponent},
       { path: 'clases', component: ClasesComponent},
       { path: 'regisest1', component: Regisest1Component},
      { path: 'bdprof1', component: Bdprof1Component},
       { path: 'regisprof1', component: Regisprof1Component},
       { path: 'registroestud', component: RegistroestudComponent},
      // { path: 'registroprof', component: RegistroprofComponent},
        // RUTAS DEL PROFESOR
        { path: 'profesor', component: ProfesorComponent},
        { path: 'temaprof', component: PevatemaComponent},
        { path: 'estudprof', component: PevaestudComponent},












    ];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
