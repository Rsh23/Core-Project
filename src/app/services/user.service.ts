import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterI } from '../modelos/register.interface';
import { RegisterResponseI } from '../modelos/registerResponseI.interface';
import { Observable } from 'rxjs';
import { Router }  from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'backend/public/registro'

  constructor( private http: HttpClient, private router: Router ) { }

  create( user: RegisterI ): Observable<RegisterResponseI> {
    let direccion = this.url;
    return this.http.post<RegisterResponseI>(direccion, user)
  }

  destroy(  ) {

  }

  update(  ) {

  }
}
