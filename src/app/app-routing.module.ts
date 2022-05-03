import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { PerfilComponent } from './components/pages/general/perfil/perfil.component';
import { BugsComponent } from './components/pages/general/bugs/bugs.component';
import { NotificacionesComponent } from './components/pages/general/notificaciones/notificaciones.component';
import { ConsultoriaComponent } from './components/pages/cliente/consultoria/consultoria.component';
import { HomeComponent } from './components/pages/general/home/home.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ChatComponent } from './components/pages/general/chat/chat.component';
import { VentasComponent } from './components/pages/cliente/ventas/ventas.component';
import { SoporteCSComponent } from './components/pages/cliente/soporte-cs/soporte-cs.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RolGuard } from './core/guards/rol/rol.guard'
import { TicketsComponent } from './components/pages/soporte-r/tickets/tickets.component';
import { SolicitudIComponent } from './components/pages/soporte-r/solicitud-i/solicitud-i.component';
import { EscalamientoComponent } from './components/pages/soporte-r/escalamiento/escalamiento.component';
import { RolGuard2 } from './core/guards/rol/rol2.guard';
import { RolGuard3 } from './core/guards/rol/rol3.guard';
import { CheckLoginGuard } from './core/guards/check-login.guard';






const app_routes: Routes = [
    { 
      path: 'login', 
      component: LoginComponent,
      canActivate: [CheckLoginGuard]
    },
    { 
      path: '', 
      component: HomeComponent 
    },      
    { 
      
      path: 'perfil', 
      component: PerfilComponent,
      canActivate: [AuthGuard],
      // data: {
      //   role: '1'
      // }
    },
    { 
      path: 'bugs', 
      component: BugsComponent,
      canActivate: [AuthGuard] 
    },
    { 
      path: 'notificaciones',
      component: NotificacionesComponent,
      canActivate: [AuthGuard] 
    },
    { 
      path: 'consultoria',
      component: ConsultoriaComponent,
      canActivate: [AuthGuard]  
    },
    { 
      path: 'home', 
      component: HomeComponent,
      canActivate: [AuthGuard] 
    },
  
    { 
      path: 'ventas', 
      component: VentasComponent,
      canActivate: [AuthGuard] 
    },
    { 
      path: 'soporte-cs', 
      component: SoporteCSComponent ,
      canActivate: [AuthGuard]
    },
    {
      path: 'tickets',
      component: TicketsComponent,
      canActivate: [AuthGuard, RolGuard3]
    },
    {
      path: 'solicitud-i',
      component: SolicitudIComponent,
      canActivate: [AuthGuard, RolGuard3]
    },
    { 
      path: 'register',
      component: RegisterComponent,
    },
    { 
      path: 'chat', 
      component: ChatComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'escalamiento',
      component: EscalamientoComponent,
      canActivate: [AuthGuard, RolGuard3]
    },
    { 
      path: '**', 
      pathMatch: 'full', 
      redirectTo: ''
    },
    
    

];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {

}