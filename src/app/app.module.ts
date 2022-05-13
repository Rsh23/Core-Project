import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/pages/register/register.component';
import { DataService } from './services/data.service';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
<<<<<<< HEAD
import { PageRoutingModule } from './components/pages/page-routing.module';
import { ClienteRoutingModule } from './components/pages/cliente/cliente-routing.module';
import { RolGuard } from './core/guards/rol/rol.guard';
import { RolGuard2 } from './core/guards/rol/rol2.guard';
import { RolGuard3 } from './core/guards/rol/rol3.guard';
import { ClienteSupRoutingModule } from './components/pages/clientesup/cliente-sup-routing.module';
import { SoporteRoutingModule } from './components/pages/soporte-r/soporte-routing.module';

=======
import { ErrorTailorModule } from '@ngneat/error-tailor';
>>>>>>> origin/master





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
<<<<<<< HEAD
    PageRoutingModule,
    ClienteRoutingModule,
    ClienteSupRoutingModule,
    SoporteRoutingModule,
    
=======
>>>>>>> origin/master
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) => 
<<<<<<< HEAD
                      `Debe tener ${requiredLength} caracteres como minimo `,
=======
                      `La contraseña debe tener ${requiredLength} caracteres`,
>>>>>>> origin/master
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
<<<<<<< HEAD
  ],
  providers: [
    DataService,
    RolGuard,
    RolGuard2,
    RolGuard3
=======
>>>>>>> origin/master
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
