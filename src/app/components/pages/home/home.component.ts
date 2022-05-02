import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ResponseI } from '../../../modelos/response.interface';
import { DataService } from '../../../services/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginI } from '../../../modelos/login.interface';
=======
import { LoginI } from '../../../modelos/login.interface';
import { ResponseI } from '../../../modelos/response.interface';
import { DataService } from '../../../services/data.service';
>>>>>>> f1454a750e4831d05c3d2d99325145299da6c395


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor( private dataSvc: DataService, private router: Router ) { }

=======
  constructor() {

    this.checkLocalStorage();
    

   }

  // select: ResponseI['rol'] = 0 ;
  menuCliente: boolean = false;  // rol 1
  menuClienteS: boolean = false; // rol 2
  menuSup: boolean = false;  // rol 3 
  menuLiderS: boolean = false; // rol 4
  menuConsult: boolean = false;  // rol 5
  menuLiderC: boolean = false; // rol 6
  menuGerencia: boolean = false // rol 7
  menuVentas: boolean = false // rol 8


  
>>>>>>> f1454a750e4831d05c3d2d99325145299da6c395

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  // menuSelect(){
  //   if( this.select == 1 ){
  //     this.mostrarM = true;
  //     console.log("Hecho")
  //   }
  // }

  checkLocalStorage(){

    if ( localStorage.getItem('rol') == "1" ) {
      this.menuCliente = true;
    }
    else if ( localStorage.getItem('rol') == "2"){
      this.menuClienteS = true;
    }
    else if ( localStorage.getItem('rol') == "3"){
      this.menuSup = true;
    }
    else if ( localStorage.getItem('rol') == "4"){
      this.menuLiderS = true;
    }
    else if ( localStorage.getItem('rol') == "5"){
      this.menuConsult = true;
    }
    else if ( localStorage.getItem('rol') == "6"){
      this.menuLiderC = true;
    }
    else if ( localStorage.getItem('rol') == "7"){
      this.menuGerencia = true;
    }
    else{
      this.menuVentas = true;
    }


   }

  

>>>>>>> f1454a750e4831d05c3d2d99325145299da6c395
  
}
