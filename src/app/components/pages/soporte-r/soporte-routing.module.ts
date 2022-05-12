import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PerfilComponent } from '../general/perfil/perfil.component';
import { BugsComponent } from '../general/bugs/bugs.component';
import { NotificacionesComponent } from '../general/notificaciones/notificaciones.component';
import { HomeComponent } from '../general/home/home.component';
import { ChatComponent } from '../general/chat/chat.component';
import { AuthGuard } from '../../../core/guards/auth.guard';
import { RolGuard } from '../../../core/guards/rol/rol.guard';
import { EscalamientoComponent } from './escalamiento/escalamiento.component';
import { SolicitudIComponent } from './solicitud-i/solicitud-i.component';
import { TicketsComponent } from './tickets/tickets.component';
import { RolchildGuard } from '../../../core/guards/rol/rolchild.guard';
import { SoporteRComponent } from './soporte-r.component';




const app_routes: Routes = [

  // Rutas cliente normal
  {
      path: '',
      component: SoporteRComponent,
      canActivate: [AuthGuard],
      canActivateChild: [RolchildGuard],
      children: [

      { 
        path: 'home', 
        component: HomeComponent,
        // canActivate: [AuthGuard] 
      },
      { 
        path: 'perfil', 
        component: PerfilComponent,
        // canActivate: [AuthGuard],
        // data: {
        //   role: '1'
        // }
      },
      { 
        path: 'bugs', 
        component: BugsComponent,
        // canActivate: [AuthGuard] 
      },
      { 
        path: 'notificaciones',
        component: NotificacionesComponent,
        // canActivate: [AuthGuard] 
      },
      { 
        path: 'chat', 
        component: ChatComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'tickets',
        component: TicketsComponent,
      },
      {
        path: 'escalamiento',
        component: EscalamientoComponent
      },
      {
        path: 'solicitudi',
        component: SolicitudIComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
       
];

@NgModule({
    imports: [
        RouterModule.forChild( app_routes )
    ],
    exports: [
        RouterModule
    ]

})
export class SoporteRoutingModule {

}