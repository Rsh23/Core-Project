import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "backend/public/login";
  
  // user: any = localStorage.getItem('rol');
  // public getCurrentUser: ResponseI;
  public nameUserLS = 'currentUserDesignicode';


  constructor( private http: HttpClient, private router: Router) {
    this.getCurrentUser();
  }

  getCurrentUser(){
    return localStorage.getItem('rol'); 
  }

  // hasAccesToModule(){}

   loginByEmail(form: LoginI): Observable<ResponseI>{
     let direccion = this.url;
      return this.http.post<ResponseI>(direccion, form);
   }

  

   

   

   
  
}
