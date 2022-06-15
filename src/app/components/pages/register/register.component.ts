import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user.service'
import { RegisterI } from '../../../modelos/register/register.interface';
import { RegisterResponseI } from '../../../modelos/register/registerResponseI.interface';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';
import { rolResponse } from 'src/app/modelos/rol/rolResponse.interface';
import { RolGuard } from 'src/app/core/guards/rol/rol.guard';
import { orgResponse } from 'src/app/modelos/organizacion/orgResponse.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ UserService ]
})
export class RegisterComponent implements OnInit {
 
  // reactiveForm: FormGroup;

  // Esto verifica que el email sea valido
  reactiveForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // registerForm = new FormGroup({
  //   nombres : new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   correo : new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
  //   rol : new FormControl('', [Validators.required]),
  //   id_organizacion : new FormControl('', [Validators.required]),
  //   clave : new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   confClave : new FormControl('', [Validators.required, Validators.minLength(8)])
  // },
  // {
  //   // validators : this.MustMatch()
  // });


  constructor( private dataSvc: UserService, private router: Router, private data: DataService, private formBuilder: FormBuilder ) {
    this.reactiveForm = this.formBuilder.group({
      nombres : new FormControl('', [Validators.required, Validators.minLength(3)]),
      correo : new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      rol : new FormControl('', [Validators.required]),
      id_organizacion : new FormControl('', [Validators.required]),
      clave : new FormControl('', [Validators.required, Validators.minLength(8)]),
      confClave : new FormControl('', [Validators.required])
    },
    {
      validators: this.MustMatch('clave', 'confClave')
    })

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

  // Esto valida que las contraseñas sean iguales
  MustMatch(controlName: string, matchingControlName: string){
    return(formGroup: FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors['MustMatch']){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch: true} )
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }

  get f (){
    return this.reactiveForm.controls;
  }


  // Esto crea un nuevo usuario
  createNewUser( user: RegisterI ){

    if (this.reactiveForm.valid) {
      
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
    this.reactiveForm.reset();
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
