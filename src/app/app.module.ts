import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { SoporteComponent } from './components/soporte/soporte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    SoporteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
