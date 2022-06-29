import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service'
import { logOutResponse } from '../../modelos/logOut/logOutResponse.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  constructor( private service: DataService, private router: Router ) { }

  ngOnInit(): void {

  }


  // Esto hace logOut al usuario
  // logOut(){
  //   if( localStorage.getItem('token') && localStorage.getItem('rol') != null ){
  //     localStorage.removeItem('token');
  //     localStorage.removeItem('rol');
  //     this.router.navigate(['login']);
  //   }
  // }

  // darkMode(){
  //   if( localStorage.getItem('theme') === 'dark' ){
  //     document.body.classList.remove('light');
  //     document.body.classList.add('dark');
  //   }
  //   else{
  //     document.body.classList.remove('dark');
  //     document.body.classList.add('light');
  //   }
  // }

  logOut(){
    const data = {
      correo: sessionStorage.getItem('correo'),
      token: localStorage.getItem('token')
    }
    this.service.logOut(data).subscribe( data => {
      let dataResponse: logOutResponse = data;
      localStorage.removeItem('token');
      localStorage.removeItem('rol');
      this.router.navigate(['login']);
    } )
  }


}
