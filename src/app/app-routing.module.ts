import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { ClienteComponent } from './components/pages/cliente/cliente.component';
import { SoporteComponent } from './components/pages/soporte/soporte.component';
import { BugsComponent } from './components/pages/bugs/bugs.component';
import { DesarrolloComponent } from './components/pages/desarrollo/desarrollo.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NotificacionesComponent } from './components/pages/notificaciones/notificaciones.component';
import { ProyectosComponent } from './components/pages/proyectos/proyectos.component';
import { ServiciosComponent } from './components/pages/servicios/servicios.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ChatComponent } from './components/pages/chat/chat.component';



const app_routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'soporte', component: SoporteComponent },
    { path: 'bugs', component: BugsComponent },
    { path: 'desarrollo', component: DesarrolloComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'notificaciones', component: NotificacionesComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'chat', component: ChatComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}

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