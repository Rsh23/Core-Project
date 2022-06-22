import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { logOutResponse } from '../../modelos/logOut/logOutResponse.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rol1: boolean = false;
  rol2: boolean = false;
  rol3: boolean = false;
  activo: boolean = false;

  constructor( private service: DataService, private router: Router ) {
    this.showOption();
   }

  showOption() {
    if ( this.service.showOption() ) {
      return this.rol1 = true;
    }
    else if ( this.service.showOption2() ) {
      return this.rol2 = true;
    }
    else if ( this.service.showOption3() ) {
      return this.rol3 = true;
    } 
    else{
      return false;
    }
  }
   
  ngOnInit(): void {
  }

  btnSwitch(){
    document.body.classList.toggle('dark');
    this.activo = !this.activo;
  }
  
}
