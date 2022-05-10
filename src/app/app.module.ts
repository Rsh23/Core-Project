import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';




import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PerfilComponent } from './components/pages/general/perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/general/home/home.component';
import { ConsultoriaComponent } from './components/pages/cliente/consultoria/consultoria.component';
import { NotificacionesComponent } from './components/pages/general/notificaciones/notificaciones.component';
import { BugsComponent } from './components/pages/general/bugs/bugs.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ChatComponent } from './components/pages/general/chat/chat.component';
import { VentasComponent } from './components/pages/cliente/ventas/ventas.component';
import { SoporteCSComponent } from './components/pages/cliente/soporte-cs/soporte-cs.component';
import { DataService } from './services/data.service';
import { TicketsComponent } from './components/pages/soporte-r/tickets/tickets.component';
import { SolicitudIComponent } from './components/pages/soporte-r/solicitud-i/solicitud-i.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { EscalamientoComponent } from './components/pages/soporte-r/escalamiento/escalamiento.component';
import { ClienteComponent } from './components/pages/cliente/cliente.component';
import { ClientesupComponent } from './components/pages/clientesup/clientesup.component';
import { SoporteRComponent } from './components/pages/soporte-r/soporte-r.component';
import { ClienteRoutingModule } from './components/pages/cliente/cliente-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    SoporteCSComponent,
    TicketsComponent,
    SolicitudIComponent,
    NotFoundComponent,
    EscalamientoComponent,
    ClienteComponent,
    ClientesupComponent,
    SoporteRComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    ClienteRoutingModule,
    
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Debe tener ${requiredLength} caracteres como minimo `,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
