import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { RolGuard } from '../../core/guards/rol/rol.guard';
import { AuthGuard } from '../../core/guards/auth.guard';



const app_routes: Routes = [

  {
    path: 'cliente',
    component: ClienteComponent,
    canActivate: [RolGuard, AuthGuard]
  }
       
];

@NgModule({
    imports: [
        RouterModule.forChild( app_routes )
    ],
    exports: [
        RouterModule
    ]

})
export class PageRoutingModule {

}