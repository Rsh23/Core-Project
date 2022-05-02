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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }

  isAuthorized( route: ActivatedRouteSnapshot ): boolean{
    const {scopes = []} = this.getUser.getCurrentUser();
    console.log(this.getUser.getCurrentUser());
    return true;

  }
  
}
