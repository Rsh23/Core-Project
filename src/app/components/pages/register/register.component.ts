import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user.service'
import { RegisterI } from '../../../modelos/register.interface';
import { RegisterResponseI } from '../../../modelos/registerResponseI.interface';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';
import { rolResponse } from 'src/app/modelos/rolResponse.interface';
import { RolGuard } from 'src/app/core/guards/rol/rol.guard';
import { orgResponse } from 'src/app/modelos/orgResponse.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ UserService ]
})
export class RegisterComponent implements OnInit {
 
  // Verificacion email
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  registerForm = new FormGroup({
    nombres : new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo : new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    rol : new FormControl('', [Validators.required]),
    id_organizacion : new FormControl('', [Validators.required]),
    clave : new FormControl('', [Validators.required, Validators.minLength(8)]),
    confClave : new FormControl('', [Validators.required, Validators.minLength(8)])
  },
  {
  //   validators : [this.MustMatch( "clave", "confClave" )]
  });


  constructor( private dataSvc: UserService, private router: Router, private data: DataService ) {
    
   }

  rol: number = 0;
  errorStatus: boolean = false;
  errorMsg: string = "";
  // check = document.getElementById('check').value;
  // pass = document.getElementById("password");
  aux: boolean = false;

  ngOnInit(): void {
    this.getRol();
    this.getOrg()
  }

  MustMatch(){

  }


  // Esto crea un nuevo usuario
  createNewUser( user: RegisterI ){

    if (this.registerForm.valid) {
      
      this.dataSvc.create(user).subscribe( data => {
        let dataResponse: RegisterResponseI = data;
        if ( dataResponse.error == false ){
          Swal.fire({
            title: 'Registro exitoso!',
            text: 'Pronto un administrador dará su aprovacion',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          console.log( data );
          this.router.navigate(['login'])
        }
      }); 

    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Debes llenar todos los campos correctamente',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

  }


  public roles: any = []; 

  getRol(){
    this.data.getRolPost( [] ).subscribe( rol => {
      let dataResponse: rolResponse = rol;
      this.roles = dataResponse.body;
      // console.log( this.roles );
    } );
  }

  public organizacion: any = [];

  getOrg(){
    this.data.getOrgPost( [] ).subscribe( rol => {
      let dataResponse: orgResponse = rol;
      this.organizacion = dataResponse.body;
    } )
  }


  onSaveForm( user: RegisterI ){  // Esto es para comprobar que el formulario sea valido

 }

  // checkPassword(){
  //   let checkP = document.getElementById("check");
  //   let pass = document.getElementById("clave");
  //   if ( this.registerForm == null ) {
  //     alert('Debes confirmar la contraseña'); 
  //     console.log( checkP )
  //     return false;
  //   }
  //   else if ( checkP != pass ){
  //     alert('Las contraseñas deben coincidir');
  //     console.log( checkP )
  //     return false;
  //   }
  //   else{

  //   }

  // }

  onResetForm(){ 
    this.registerForm.reset();
  }

  // checkPassword(){
  //   let checkP = document.getElementById("check");
  //   let pass = document.getElementById("clave");
  //   if ( this.registerForm == null ) {
  //     alert('Debes confirmar la contraseña'); 
  //     console.log( checkP )
  //     return false;
  //   }
  //   else if ( checkP != pass ){
  //     alert('Las contraseñas deben coincidir');
  //     console.log( checkP )
  //     return false;
  //   }
  //   else{
  //     return true;
  //   }
  // }

}
