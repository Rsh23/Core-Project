import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterI } from '../modelos/register.interface';
import { RegisterResponseI } from '../modelos/registerResponseI.interface';
import { Observable } from 'rxjs';
import { Router }  from '@angular/router';
import { PathRest } from '../static/path-rest';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor( private http: HttpClient, private router: Router ) { }

  create( user: RegisterI ): Observable<RegisterResponseI> {
    return this.http.post<RegisterResponseI>(PathRest.POST_REGISTER, user)
  }

}
