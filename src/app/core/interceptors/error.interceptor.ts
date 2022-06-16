import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router){
    }
    //Esto captura los errores HTTP
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err) => {
                console.log("interceptor")
                if( [500].indexOf(err.status) !== -1 ){
                    Swal.fire({
                        title: 'Error',
                        text: err.error.body,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                    // alert(err.error.body)
                }
                return throwError(err);
            })
        );
    }
}