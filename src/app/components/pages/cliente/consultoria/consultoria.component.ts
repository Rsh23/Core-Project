import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-consultoria',
  templateUrl: './consultoria.component.html',
  styleUrls: ['./consultoria.component.css']
})
export class ConsultoriaComponent implements OnInit {

  rol1 = false;
  rol2 = false;
  rol3 = false;

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
