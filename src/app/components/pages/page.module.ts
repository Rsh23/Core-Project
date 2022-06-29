import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PageRoutingModule } from './page-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

//Roles
import { ClienteComponent } from './cliente/cliente.component';
import { ClientesupComponent } from './clientesup/clientesup.component';
import { SoporteRComponent } from './soporte-r/soporte-r.component';
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
import { ConsultoriaComponent } from './cliente/consultoria/consultoria.component';
import { SoporteCSComponent } from './cliente/soporte-cs/soporte-cs.component';
import { VentasComponent } from './cliente/ventas/ventas.component';
//Soporte
import { EscalamientoComponent } from './soporte-r/escalamiento/escalamiento.component';
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
//Directivas


@NgModule({
  declarations: [
    ClienteComponent, 
    ClientesupComponent,
    SoporteRComponent,
    BugsComponent,
    HomeComponent,
    ChatComponent,
    NotificacionesComponent,
    PerfilComponent,
    ConsultoriaComponent,
    SoporteCSComponent,
    VentasComponent,
    EscalamientoComponent,
    SolicitudIComponent,
    TicketsComponent,
    MenuComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ClienteRoutingModule,
    ClienteSupRoutingModule,
    HttpClientModule,
    SoporteRoutingModule,
    NgxChartsModule,
    MatSlideToggleModule
  ],
  providers: [
    DataService,
    RolGuard,
    RolchildGuard
  ],
})
export class PageModule { }
