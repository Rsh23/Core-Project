import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { SoporteComponent } from './components/pages/soporte/soporte.component';
import { BugsComponent } from './components/pages/bugs/bugs.component';
import { NotificacionesComponent } from './components/pages/notificaciones/notificaciones.component';
import { ConsultoriaComponent } from './components/pages/consultoria/consultoria.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ChatComponent } from './components/pages/chat/chat.component';
import { VentasComponent } from './components/pages/ventas/ventas.component';
import { SoporteCSComponent } from './components/pages/soporte-cs/soporte-cs.component';
import { AuthGuard } from './shared/auth.guard';






const app_routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'soporte', component: SoporteComponent },
    { path: 'bugs', component: BugsComponent },
    { path: 'notificaciones', component: NotificacionesComponent },
    { path: 'consultoria', component: ConsultoriaComponent },
    { path: 'home', component: HomeComponent, /*canActivate: [AuthGuard]*/ },
    { path: 'register', component: RegisterComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'ventas', component: VentasComponent },
    { path: 'soporte-cs', component: SoporteCSComponent },
    // { canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: ''},
    
    

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