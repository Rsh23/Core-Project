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
    // this.getCurrentUser()
  }

  getCurrentUser(){  // Esto obtine el usuario que esta activo
    return localStorage.getItem('token'); 
  }



  loginByEmail(form: LoginI): Observable<ResponseI>{  // Este es el metodo para loguearse
     let direccion = this.url;
      return this.http.post<ResponseI>(direccion, form);
  }

  getRol(){
    return localStorage.getItem('rol') || ""
  }  // Esto saca el rol del local storage

  haveAccess(){  // Esto es para obtener acceso segun el rol que inicio sesion 
    let loggintoken = localStorage.getItem('rol') || '';
    if ( loggintoken == '1') {
      return true;
    }
    else if( loggintoken == '2' ){
      return true;
    }
    else if( loggintoken == '3' ){
      return true;
    }
    else{
      alert("No tienes acesso!");
      return false;
    }
  }
   
  
}
