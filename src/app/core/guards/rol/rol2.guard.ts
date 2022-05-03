import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard2 implements CanActivate {

  constructor( private userService: DataService, private router: Router ){

  }

  canActivate(){
    if( this.userService.haveAccess2() ){
      return true;
    }
    
    else{
      this.router.navigate(['/home'])
      return false;
    }
  }

  
  
}
