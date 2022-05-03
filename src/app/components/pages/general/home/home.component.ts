import { Component, OnInit } from '@angular/core';
import { LoginI } from '../../../../modelos/login.interface';
import { ResponseI } from '../../../../modelos/response.interface';
import { DataService } from '../../../../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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


  

  ngOnInit(): void {
  }

  // menuSelect(){
  //   if( this.select == 1 ){
  //     this.mostrarM = true;
  //     console.log("Hecho")
  //   }
  // }

  checkLocalStorage(){

    if ( sessionStorage.getItem('rol') == "1" ) {
      this.menuCliente = true;
    }
    else if ( sessionStorage.getItem('rol') == "2"){
      this.menuClienteS = true;
    }
    else if ( sessionStorage.getItem('rol') == "3"){
      this.menuSup = true;
    }
    else if ( sessionStorage.getItem('rol') == "4"){
      this.menuLiderS = true;
    }
    else if ( sessionStorage.getItem('rol') == "5"){
      this.menuConsult = true;
    }
    else if ( sessionStorage.getItem('rol') == "6"){
      this.menuLiderC = true;
    }
    else if ( sessionStorage.getItem('rol') == "7"){
      this.menuGerencia = true;
    }
    else{
      this.menuVentas = true;
    }


   }

  

  
}
