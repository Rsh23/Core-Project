import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginI } from '../modelos/login/login.interface';
import { ResponseI } from '../modelos/login/response.interface';
import { Observable, BehaviorSubject, catchError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PathRest } from '../static/path-rest';
import { rolResponse } from '../modelos/rol/rolResponse.interface';
import { orgResponse } from '../modelos/organizacion/orgResponse.interface';
import { groupResponse } from '../modelos/chat/groupResponse.interface';
import { statusResponse } from '../modelos/tickets/statusResponse.interface';
import { logOutResponse } from '../modelos/logOut/logOutResponse.interface';
import { priorityResponse } from '../modelos/tickets/priorityResponse.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // user: any = localStorage.getItem('rol');
  // public getCurrentUser: ResponseI;
  // public nameUserLS = 'currentUserDesignicode';


  constructor( private http: HttpClient, private router: Router) {
    // this.getCurrentUser()
  }

  getCurrentUser(){  // Esto obtine el usuario que esta activo
    return localStorage.getItem('token'); 
  }

  loginByEmail(form: LoginI): Observable<ResponseI>{  // Este es el metodo para loguearse
      return this.http.post<ResponseI>(PathRest.POST_LOGIN, form)
  }

  // Este es el metodo del logOut
  logOut( from: {} ): Observable<logOutResponse>{
    return this.http.put<logOutResponse>(PathRest.PUT_LOGOUT, from)
  }

  // Esto sirve para obtener el rol (Cliente, ClienteSuper, etc)
  getRolPost(rol: []): Observable<rolResponse> {
    return this.http.post<rolResponse>(PathRest.POST_ROL, rol);
  }

  // ESTO LISTA LAS ORGANIZACIONES EXISTENTES
  getOrgPost( org: [] ): Observable<orgResponse> {
    return this.http.post<orgResponse>(PathRest.POST_ORG, org);
  }

  // ESTO LISTA LOS GRUPOS DEL USUARIO LOGUEADO
  getGroup( group: {} ): Observable<groupResponse> {
    return this.http.post<groupResponse>(PathRest.POST_CHAT_LISTAR, group);
  }

  getStatus( status: {} ): Observable<statusResponse>{
    return this.http.post<statusResponse>(PathRest.POST_STATUS_TICKET, status);
  }

  getRol(){
    return localStorage.getItem('rol')
  }  // Esto saca el rol del local storage

  getPriority( priority: {} ): Observable<priorityResponse>{
    return this.http.post<priorityResponse>(PathRest.POST_PRIORITY_TICKETS, priority)
  }

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
   
  
}
