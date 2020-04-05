import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
// PAGINAS
import { PagesComponent } from './pages.component';

// MDBOOSTRAP
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// RUTAS
import { AppRoutingModule } from '../app-routing.module';
import { CompartidoModule } from '../compartido/compartido.module';
// LOGIN
import { Header2Component } from '../compartido/header2/header2.component';
import { LoginComponent } from '../login/login.component';
// ESTUDIANTE
import { EstudianteComponent } from './estudiante/estudiante.component';
import { Uni1Component } from './unidades/uni1/uni1.component';
import { Uni2Component } from './unidades/uni2/uni2.component';
import { Uni3Component } from './unidades/uni3/uni3.component';
import { U1tema1Component } from './utemas/u1tema1/u1tema1.component';
import { U1tema2Component } from './utemas/u1tema2/u1tema2.component';
import { U1tema3Component } from './utemas/u1tema3/u1tema3.component';
import { U1tema4Component } from './utemas/u1tema4/u1tema4.component';
import { U2tema1Component } from './utemas/u2tema1/u2tema1.component';
import { U3tema1Component } from './utemas/u3tema1/u3tema1.component';
import { U3tema2Component } from './utemas/u3tema2/u3tema2.component';
import { U3tema3Component } from './utemas/u3tema3/u3tema3.component';
import { U3tema4Component } from './utemas/u3tema4/u3tema4.component';
import { U3tema5Component } from './utemas/u3tema5/u3tema5.component';
import { U3tema6Component } from './utemas/u3tema6/u3tema6.component';
import { AdmiComponent } from './admin/admi/admi.component';
import { ClasesComponent } from './admin/clases/clases.component';
import { Regisest1Component } from './admin/regisest1/regisest1.component';
import { Regisprof1Component } from './admin/regisprof1/regisprof1.component';
import { Bdprof1Component } from './admin/bdprof1/bdprof1.component';
import { RegistroestudComponent } from './admin/registroestud/registroestud.component';
import { RegistroprofComponent } from './admin/registroprof/registroprof.component';
import { PevaestudComponent } from './profesor/pevaestud/pevaestud.component';
import { PevatemaComponent } from './profesor/pevatema/pevatema.component';
import { ProfesorComponent } from './profesor/profesor.component';

import { Grafica1Component } from './graficas/grafica1/grafica1.component';
import { Grafica2Component } from './graficas/grafica2/grafica2.component';


// Paginacion

import {NgxPaginationModule} from 'ngx-pagination';
import { Bdprof1Component } from './admin/bdprof1/bdprof1/bdprof1.component';



@NgModule({

    declarations: [
        Header2Component,
        PagesComponent,
        LoginComponent,
        EstudianteComponent,
        Uni1Component,
        Uni2Component,
        Uni3Component,
        U1tema1Component,
        U1tema2Component,
        U1tema3Component,
        U1tema4Component,
        U2tema1Component,
        U3tema1Component,
        U3tema2Component,
        U3tema3Component,
        U3tema4Component,
        U3tema5Component,
        U3tema6Component,
        AdmiComponent,
        ClasesComponent,
        Regisest1Component,
        Regisprof1Component,
        RegistroestudComponent,
        RegistroprofComponent,
        PevaestudComponent,
        PevatemaComponent,
        ProfesorComponent,
        Grafica1Component,
        Grafica2Component,
        Bdprof1Component,



    ],
    exports: [
        LoginComponent,

        Header2Component,
        LoginComponent,
        EstudianteComponent,
        Uni1Component,
        Uni2Component,
        Uni3Component,
        Grafica1Component,
        Grafica2Component,



    ],
    imports: [

        CompartidoModule,
        MDBBootstrapModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        CommonModule,
        NgxPaginationModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]



})
export class PagesModule { }
