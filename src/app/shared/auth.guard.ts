import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private service:DataService, private router:Router ) {

  }

  canActivate() {
    if (this.service.IsLoggedIn()) {
      return true;  
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
    
  }
  
}
