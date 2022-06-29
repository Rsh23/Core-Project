import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/pages/register/register.component';
import { DataService } from './services/data.service';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    // ObjToArray

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
    NgxChartsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Este campo requiere ${requiredLength} caracteres como minimo`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
