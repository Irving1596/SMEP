import { NgModule } from '@angular/core';
import { CompartidoComponent } from './compartido.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';





@NgModule({

    declarations: [


        FooterComponent

    ],
    exports: [
       FooterComponent
    ],
    imports: [
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],



})

export class CompartidoModule { }
