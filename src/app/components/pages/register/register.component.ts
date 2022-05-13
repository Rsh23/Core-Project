import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service'
import { RegisterI } from '../../../modelos/register.interface';
import { RegisterResponseI } from '../../../modelos/registerResponseI.interface';
import Swal from 'sweetalert2';


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
<<<<<<< HEAD
    nombres : new FormControl('', [Validators.required, Validators.minLength(3) ]),
=======
    nombres : new FormControl('', [Validators.required]),
>>>>>>> origin/master
    correo : new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    tipo_usuario : new FormControl('', [Validators.required]),
    clave : new FormControl('', [Validators.required, Validators.minLength(8)]),
    confClave : new FormControl('', [Validators.required, Validators.minLength(8)])
});


  constructor( private dataSvc: UserService, private router: Router ) {
    
   }

  errorStatus: boolean = false;
  errorMsg: string = "";
  // check = document.getElementById('check').value;
  // pass = document.getElementById("password");
  aux: boolean = false;

  ngOnInit(): void {
    
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
        text: 'Debes llenar todos los campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

  }

<<<<<<< HEAD
  // get name(){ return this.registerForm.get('nombres'); }
  // get email(){ return this.registerForm.get('correo'); }
  // get tipo(){ return this.registerForm.get('tipo_usuario'); }
  // get pass(){ return this.registerForm.get('clave'); }
  // get passConf(){ return this.registerForm.get('confClave'); }
=======
  // onSaveForm(){   Esto es para comprobar que el formulario sea valido
>>>>>>> origin/master

  onSaveForm( user: RegisterI ){  // Esto es para comprobar que el formulario sea valido

<<<<<<< HEAD
    if(this.registerForm.valid){
      this.createNewUser( user );
      this.onResetForm();
=======
  // }

  checkPassword(){
    let checkP = document.getElementById("check");
    let pass = document.getElementById("clave");
    if ( this.registerForm == null ) {
      alert('Debes confirmar la contraseña'); 
      console.log( checkP )
      return false;
    }
    else if ( checkP != pass ){
      alert('Las contraseñas deben coincidir');
      console.log( checkP )
      return false;
>>>>>>> origin/master
    }
    else{

    }

  }

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
