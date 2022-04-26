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

    // this.dataSvc.getAll().subscribe( res => {
    //   console.log('res', res);
    // })

    fetch('https://coredevelopmentprojects.com/backend/public/login')
    .then(response => response.json())
    .then(data => console.log(data));

  }

  

}
