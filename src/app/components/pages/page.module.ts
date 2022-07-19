import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PageRoutingModule } from './page-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';

//Roles
import { ClienteComponent } from './cliente/cliente.component';
import { ClientesupComponent } from './clientesup/clientesup.component';
import { SoporteRComponent } from './soporte-r/soporte-r.component';
import { LiderSoporteComponent } from './lider-soporte/lider-soporte.component';
import { ConsultoriaRolComponent } from './consultoria/consultoria.component';
//General
import { BugsComponent } from './general/bugs/bugs.component';
import { HomeComponent } from './general/home/home.component';
import { ChatComponent } from './general/chat/chat.component';
import { NotificacionesComponent } from './general/notificaciones/notificaciones.component';
import { PerfilComponent  } from './general/perfil/perfil.component';
// Shared
import { MenuComponent } from '../../shared/menu/menu.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
//Clientes
import { SoporteCSComponent } from './cliente/soporte-cs/soporte-cs.component';
//Soporte
import { EscalamientoComponent } from './soporte-r/escalamiento/escalamiento.component';
import { VentasComponent } from './cliente/ventas/ventas.component'
import { SolicitudIComponent } from './soporte-r/solicitud-i/solicitud-i.component';
import { TicketsComponent } from './soporte-r/tickets/tickets.component';
import { ClienteRoutingModule } from './cliente/cliente-routing.module';
import { DataService } from 'src/app/services/data.service';
import { RolGuard } from '../../core/guards/rol/rol.guard';
import { RolchildGuard } from '../../core/guards/rol/rolchild.guard';
import { ClienteSupRoutingModule } from './clientesup/cliente-sup-routing.module';
import { SoporteRoutingModule } from './soporte-r/soporte-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';
//Consultoria
import { ConsultoriaComponent } from './cliente/consultoria/consultoria.component';
//Lider Consultoria
import { LiderConsultoriaComponent } from './lider-consultoria/lider-consultoria.component';
//Gerencia
import { GerenciaComponent } from './gerencia/gerencia.component';
//Ventas
import { VentasRolComponent } from './ventas/ventas.component';
//Directivas


@NgModule({
  declarations: [
    ClienteComponent, 
    ClientesupComponent,
    SoporteRComponent,
    BugsComponent,
    ConsultoriaComponent,
    HomeComponent,
    ChatComponent,
    NotificacionesComponent,
    PerfilComponent,
    SoporteCSComponent,
    VentasRolComponent,
    EscalamientoComponent,
    SolicitudIComponent,
    TicketsComponent,
    MenuComponent,
    NavbarComponent,
    LiderSoporteComponent,
    ConsultoriaRolComponent,
    LiderConsultoriaComponent,
    GerenciaComponent,
    VentasComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ClienteRoutingModule,
    ClienteSupRoutingModule,
    HttpClientModule,
    SoporteRoutingModule,
    NgxChartsModule,
    MatSlideToggleModule,
    ReactiveFormsModule, 
    FormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Este campo requiere ${requiredLength} caracteres como minimo`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  providers: [
    DataService,
    RolGuard,
    RolchildGuard
  ],
})
export class PageModule { }
