import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ClienteComponent } from './components/pages/cliente/cliente.component';
import { SoporteComponent } from './components/pages/soporte/soporte.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { ProyectosComponent } from './components/pages/proyectos/proyectos.component';
import { DesarrolloComponent } from './components/pages/desarrollo/desarrollo.component';
import { ServiciosComponent } from './components/pages/servicios/servicios.component';
import { NotificacionesComponent } from './components/pages/notificaciones/notificaciones.component';
import { BugsComponent } from './components/pages/bugs/bugs.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ChatComponent } from './components/pages/chat/chat.component';
import { MenuClienteComponent } from './shared/menu-cliente/menu-cliente.component';
import { MenuSoporteComponent } from './shared/menu-soporte/menu-soporte.component';
import { MenuConsultoriaComponent } from './shared/menu-consultoria/menu-consultoria.component';
import { MenuGerneciaComponent } from './shared/menu-gernecia/menu-gernecia.component';
import { MenuComercialComponent } from './shared/menu-comercial/menu-comercial.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    SoporteComponent,
    PerfilComponent,
    HomeComponent,
    ProyectosComponent,
    DesarrolloComponent,
    ServiciosComponent,
    NotificacionesComponent,
    BugsComponent,
    MenuComponent,
    RegisterComponent,
    NavbarComponent,
    ChatComponent,
    MenuClienteComponent,
    MenuSoporteComponent,
    MenuConsultoriaComponent,
    MenuGerneciaComponent,
    MenuComercialComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
