import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

  getUser : any = DataService;

  constructor( private userService: DataService, private router: Router ){

  }

  canActivate(){
    if( this.userService.haveAccess() ){
      return true;
    }
    
    else{
      this.router.navigate(['/home'])
      return false;
    }
  }

  
  
}
