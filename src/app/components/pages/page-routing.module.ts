import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';



const app_routes: Routes = [

  {
    path: '',
    component: ClienteComponent
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