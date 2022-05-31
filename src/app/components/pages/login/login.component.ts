import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginI } from '../../../modelos/login/login.interface';
import { Router } from '@angular/router';
import {  ResponseI } from '../../../modelos/login/response.interface';
import Swal from 'sweetalert2'





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
      correo : new FormControl('',),
      clave : new FormControl('', )
  });

  constructor( private dataSvc: DataService, private router: Router ) {
    
   }

  errorStatus: boolean = false;
  errorMsg: any = "";
  mostrarM : boolean = false;
  correo : string = "";
  token : string = "";

  ngOnInit(): void {
   

  }


  // Esto loguea al usuario
  onLogin(form: LoginI){
      this.dataSvc.loginByEmail(form).subscribe( data => {
        let dataResponse: ResponseI = data;
        if( dataResponse.error == false ){
          localStorage.setItem("token", dataResponse.body[0].token);  // Aqui se guarda el token en el localStorage
          localStorage.setItem("rol", dataResponse.body[0].rol);      // Aqui se guarda el rol en el localStorage
          sessionStorage.setItem("correo", dataResponse.body[0].correo);   // Aqui se guarda el correo en el sessionStorage
          if (localStorage.getItem("rol") == "1") {
            this.router.navigate(['cliente']) 
          }
          else if( localStorage.getItem("rol") == "2"){
            this.router.navigate(['clientesup/home']);
          }
          else if( localStorage.getItem("rol") == "3"){
            this.router.navigate(['soporte/home']);
          }
        }
        else{
          Swal.fire({
            title: 'Error!',
            text: 'Datos invalidos',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }

      });
  }
  
}
