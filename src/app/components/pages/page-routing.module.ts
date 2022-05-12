import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { RolGuard } from '../../core/guards/rol/rol.guard';
import { AuthGuard } from '../../core/guards/auth.guard';
import { ClientesupComponent } from './clientesup/clientesup.component';
import { RolGuard2 } from './../../core/guards/rol/rol2.guard';
import { SoporteRComponent } from './soporte-r/soporte-r.component';
import { RolGuard3 } from 'src/app/core/guards/rol/rol3.guard';



const app_routes: Routes = [

  {
    path: 'cliente',
    component: ClienteComponent,
    canActivate: [RolGuard, AuthGuard]
  },
  {
    path: 'clientesup',
    component: ClientesupComponent,
    canActivate: [RolGuard2, AuthGuard]
  },
  {
    path: 'soporte',
    component: SoporteRComponent,
    canActivate: [RolGuard3, AuthGuard]
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