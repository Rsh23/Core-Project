import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Rol4Guard implements CanActivate {

  constructor( private userService: DataService, private router: Router){

  }

  canActivate(){
    if( this.userService.haveAccess4() ){
      return true;
    }
    
    else{
      return false;
    }
  }
  
}
