import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterI } from '../modelos/register/register.interface';
import { Observable } from 'rxjs';
import { Router }  from '@angular/router';
import { PathRest } from '../static/path-rest';
import { RegisterResponseI } from '../modelos/register/registerResponseI.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor( private http: HttpClient, private router: Router ) { }

  // ESTE ES EL METODO PARA CREAR UN USUARIO
  create( user: RegisterI ): Observable<RegisterResponseI> {
    
      return this.http.post<RegisterResponseI>(PathRest.POST_REGISTER, user)
    
    }

}
