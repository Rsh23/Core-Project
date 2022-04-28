import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SoporteComponent } from './components/pages/soporte/soporte.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { ConsultoriaComponent } from './components/pages/consultoria/consultoria.component';
import { NotificacionesComponent } from './components/pages/notificaciones/notificaciones.component';
import { BugsComponent } from './components/pages/bugs/bugs.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ChatComponent } from './components/pages/chat/chat.component';
import { VentasComponent } from './components/pages/ventas/ventas.component';
import { MenuClienteComponent } from './shared/menu-cliente/menu-cliente.component';
import { MenuSoporteComponent } from './shared/menu-soporte/menu-soporte.component';
import { MenuClienteSComponent } from './shared/menu-clienteS/menu-clienteS.component';
import { SoporteCSComponent } from './components/pages/soporte-cs/soporte-cs.component';
import { DataService } from './services/data.service';
import { TicketsComponent } from './components/pages/tickets/tickets.component';
import { SolicitudIComponent } from './components/pages/solicitud-i/solicitud-i.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SoporteComponent,
    PerfilComponent,
    HomeComponent,
    ConsultoriaComponent,
    NotificacionesComponent,
    BugsComponent,
    MenuComponent,
    RegisterComponent,
    NavbarComponent,
    ChatComponent,
    VentasComponent,
    MenuClienteComponent,
    MenuSoporteComponent,
    MenuClienteSComponent,
    SoporteCSComponent,
    TicketsComponent,
    SolicitudIComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
