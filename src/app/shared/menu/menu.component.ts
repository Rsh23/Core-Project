import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rol1: boolean = false;
  rol2: boolean = false;
  rol3: boolean = false;

  constructor( private service: DataService ) {
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

  

  
}
