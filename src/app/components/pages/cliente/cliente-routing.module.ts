import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PerfilComponent } from '../general/perfil/perfil.component';
import { BugsComponent } from '../general/bugs/bugs.component';
import { NotificacionesComponent } from '../general/notificaciones/notificaciones.component';
import { ConsultoriaComponent } from '../cliente/consultoria/consultoria.component';
import { HomeComponent } from '../general/home/home.component';
import { ChatComponent } from '../general/chat/chat.component';
import { VentasComponent } from '../cliente/ventas/ventas.component';
import { SoporteCSComponent } from '../cliente/soporte-cs/soporte-cs.component';
import { AuthGuard } from '../../../core/guards/auth.guard';
import { RolGuard } from '../../../core/guards/rol/rol.guard'
import { ClienteComponent } from '../cliente/cliente.component';
import { NotFoundComponent } from '../not-found/not-found.component'; 
import { RolchildGuard } from '../../../core/guards/rol/rolchild.guard';




const app_routes: Routes = [

  // Rutas cliente normal
  {
      path: '',
      component: ClienteComponent,
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
        path: 'consultoria',
        component: ConsultoriaComponent,
        // canActivate: [AuthGuard]  
      },   
      { 
        path: 'ventas', 
        component: VentasComponent,
        // canActivate: [AuthGuard] 
      },
      { 
        path: 'soporte-cs', 
        component: SoporteCSComponent ,
        // canActivate: [AuthGuard]
      },
      { 
        path: 'chat', 
        component: ChatComponent,
        // canActivate: [AuthGuard]
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
export class ClienteRoutingModule {

}