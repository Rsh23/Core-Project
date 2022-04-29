import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private inject: Injector ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice = this.inject.get(DataService)
    let jwtToken = req.clone({
      setHeaders:{
        Authorrization : 'bearer' + authservice.getToken()
      }
    });
    return next.handle(jwtToken);
  }

}
