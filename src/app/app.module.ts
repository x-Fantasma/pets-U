import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormMascota1Component } from './components/form-mascota1/form-mascota1.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormMascota2Component } from './components/form-mascota2/form-mascota2.component';
import { FormMascota3Component } from './components/form-mascota3/form-mascota3.component';
import { HttpErrorInterceptor } from './exceptions/http-error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FormMascota1Component,
    FormMascota2Component,
    FormMascota3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {

      provide: HTTP_INTERCEPTORS,

      useClass: HttpErrorInterceptor,

      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
