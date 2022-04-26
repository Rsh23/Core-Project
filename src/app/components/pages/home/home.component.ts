import { Component, OnInit } from '@angular/core';
import { LoginI } from '../../../modelos/login.interface';
import { ResponseI } from '../../../modelos/response.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  select: ResponseI['estado'] = 0 ;
  mostrar: boolean = false;

  ngOnInit(): void {
  }

  menuSelect(){
    if( this.select == 1 ){
      this.mostrar = true;
    }
  }
}
