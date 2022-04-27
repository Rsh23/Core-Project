import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "backend/public/login"

  constructor( private http: HttpClient ) {}

   loginByEmail(form: LoginI): Observable<ResponseI>{
     let direccion = this.url;
      return this.http.post<ResponseI>(direccion, form);
   }

   
  
}
