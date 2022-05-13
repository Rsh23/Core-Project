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
import { ClienteComponent } from './components/pages/cliente/cliente.component';
import { ClientesupComponent } from './components/pages/clientesup/clientesup.component';
import { SoporteRComponent } from './components/pages/soporte-r/soporte-r.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component'; 
import {  RolchildGuard } from './core/guards/rol/rolchild.guard';







const app_routes: Routes = [

  {  
    path: 'login', 
    component: LoginComponent,
    // canActivate: [CheckLoginGuard]
  },
  {
    path: '',
    component: LoginComponent
  },
  { 
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'cliente',
    canActivate: [AuthGuard, RolGuard],
    loadChildren: ()=> import('./components/pages/page.module').then((m) => m.PageModule)
  },
  {
    path: 'clientesup',
    canActivate: [AuthGuard, RolGuard2],
    loadChildren: () => import('./components/pages/page.module').then((m) => m.PageModule)
  },
  {
    path: 'soporte',
    canActivate: [AuthGuard, RolGuard3],
    loadChildren: () => import('./components/pages/page.module').then((m) => m.PageModule)
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  },
  { 
    path: '**', 
    pathMatch: 'full', 
    redirectTo: 'notfound'
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