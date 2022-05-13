import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { Observable, BehaviorSubject, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';



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
    return localStorage.getItem('jwtTokenName'); 
  }



  loginByEmail(form: LoginI): Observable<ResponseI >{  // Este es el metodo para loguearse
     let direccion = this.url;
      return this.http.post<ResponseI>(direccion, form)
  }

  getRol(){
    return localStorage.getItem('rol')
  }  // Esto saca el rol del local storage

  haveAccess1(){  // Esto es para obtener acceso segun el rol que inicio sesion 
    let loggintoken = localStorage.getItem('rol');
    if ( loggintoken == '1') {
      return true;
    }
    else{
      
      Swal.fire(
        'Error!',
        'No tienes permisos de acceso',
        'error'
      )

      // alert("No tienes acesso!");
      if( loggintoken == "2" ){
        this.router.navigate(['clientesup']);
      }
      else if( loggintoken == "3" ){
        this.router.navigate(['soporte'])
      }
      return false;
    }
  }
  haveAccess2(){  // Esto es para obtener acceso segun el rol que inicio sesion 
    let loggintoken = localStorage.getItem('rol');
    if ( loggintoken == '2') {
      return true;
    }
    else{
      
      Swal.fire(
        'Error!',
        'No tienes permisos de acceso',
        'error'
      )

      if( loggintoken == "1" ){
        this.router.navigate(['cliente'])
      }
      else if( loggintoken == "3" ){
        this.router.navigate(['soporte'])
      }
      return false;
    }
  }
  haveAccess3(){  // Esto es para obtener acceso segun el rol que inicio sesion 
    let loggintoken = localStorage.getItem('rol');
    if ( loggintoken == '3') {
      return true;
    }
    else{

      Swal.fire(
        'Error!',
        'No tienes permisos de acceso',
        'error'
      )

      // alert("No tienes acesso!");
      if (loggintoken == "1"){
        this.router.navigate(['cliente']);   
      }
      else if( loggintoken == "2"){
        this.router.navigate(['clientesup']);
      }
    return false;
    }
  }

  showOption(){
    if ( localStorage.getItem('rol') == '1' ) {
      return true;
    
    }

    else{
      return false;
    }  
  }

  showOption2(){
    if ( localStorage.getItem('rol') == '2' ) {
      return true;
    }
    else{
      return false;
    }
  }

  showOption3(){
    if ( localStorage.getItem('rol') == '3' ) {
      return true;
    }
    else{
      return false;
    }
  }

  logOut(): void{}
   
  
}
