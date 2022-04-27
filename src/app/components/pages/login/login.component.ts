import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService],
})
export class LoginComponent implements OnInit {

  constructor( private dataSvc: DataService ) { }

  ngOnInit(): void {


    var data = { correo:"cliente@cliente.com",clave:"cliente@cliente.com"};
    fetch('https://coredevelopmentprojects.com/backend/public/login', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

  }

  

}
