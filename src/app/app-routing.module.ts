import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RolGuard } from './core/guards/rol/rol.guard'
import { RolGuard2 } from './core/guards/rol/rol2.guard';
import { RolGuard3 } from './core/guards/rol/rol3.guard';
import { NotFoundComponent } from './components/pages/not-found/not-found.component'; 
import { Rol4Guard } from './core/guards/rol/rol4.guard';
import { Rol5Guard } from './core/guards/rol/rol5.guard';
import { Rol6Guard } from './core/guards/rol/rol6.guard';





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
    path: 'liderSupp',
    canActivate: [AuthGuard, Rol4Guard],
    loadChildren: () => import('./components/pages/page.module').then((m) => m.PageModule)
  },
  {
    path: 'consultoria',
    canActivate: [AuthGuard, Rol5Guard],
    loadChildren: () => import('./components/pages/page.module').then((m) => m.PageModule)
  },
  {
    path: 'liderCons',
    canActivate: [AuthGuard, Rol6Guard],
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