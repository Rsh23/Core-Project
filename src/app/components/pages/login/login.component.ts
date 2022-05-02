import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginI } from '../../../modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from '../../../modelos/response.interface';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService],
})
export class LoginComponent implements OnInit {

  loginFrom = new FormGroup({
      correo : new FormControl('', Validators.required),
      clave : new FormControl('', Validators.required)
  });

  constructor( private dataSvc: DataService, private router: Router ) { }

  errorStatus: boolean = false;
  errorMsg: any = "";
  mostrarM : boolean = false;

  ngOnInit(): void {
   

  }

  onLogin(form: LoginI){
      this.dataSvc.loginByEmail(form).subscribe( data => {
        let dataResponse: ResponseI = data;
        if(dataResponse.error == false){
          console.log(data);
          localStorage.setItem("rol", dataResponse.rol);
          this.router.navigate(['/home'])
        }
        else{
          this.errorStatus = true;
          this.errorMsg = dataResponse.message;
        }
      });
  }



  

}
