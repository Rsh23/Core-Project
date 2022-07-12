import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class Rol5Guard implements CanActivate {
  constructor( private userService: DataService, private router: Router){

  }

  canActivate(){
    if( this.userService.haveAccess5() ){
      return true;
    }
    
    else{
      return false;
    }
  }
  
  
}
