import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard3 implements CanActivate {

  constructor( private userService: DataService, private router: Router ){

  }

  canActivate(){
    if( this.userService.haveAccess3() ){
      return true;
    }
    
    else{
      return false;
    }
  }

  
  
}
