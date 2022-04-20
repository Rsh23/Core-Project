import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './shared/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { SoporteComponent } from './components/soporte/soporte.component';





const app_routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'soporte', component: SoporteComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
    // imports: [
    //     RouterModule.forRoot( app_routes )
    // ],
    // exports: [
    //     RouterModule
    // ]

})
export class AppRoutingModule {

}