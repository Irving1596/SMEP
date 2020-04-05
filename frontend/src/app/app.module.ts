import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_ROUTES } from './app.router';

//service
import {ApiService} from './services/api.service';
import {ClaseService} from './services/clase.service';
import {EstudianteService} from './services/estudiante.service';
import {CalificacionService} from './services/calificacion.service';
import {ProfesorService} from './services/profesor.service';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './compartido/footer/footer.component';
import { Header2Component } from './compartido/header2/header2.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { CompartidoComponent } from './compartido/compartido.component';



import { PagesModule } from './pages/pages.module';
import { MaterialModule } from './material.module';
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

@NgModule({
  declarations: [
    AppComponent,
      CompartidoComponent,
    QuizComponent,
    Quiz2Component,
    Quiz3Component,
    Quiz4Component,
    Quiz5Component,
    Quiz6Component,
    Quiz7Component,
    Quiz8Component,
    Quiz9Component,
    Quiz10Component,
    Quiz11Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [ApiService,ClaseService,EstudianteService,CalificacionService,ProfesorService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
