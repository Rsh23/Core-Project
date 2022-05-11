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
import { PageRoutingModule } from './components/pages/page-routing.module';
import { ClienteRoutingModule } from './components/pages/cliente/cliente-routing.module';






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
    PageRoutingModule,
    ClienteRoutingModule,
    
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Debe tener ${requiredLength} caracteres como minimo `,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
