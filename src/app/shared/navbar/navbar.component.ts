import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  constructor( private service: DataService, private router: Router ) { }

  ngOnInit(): void {
  }

  logOut(){
    if( localStorage.getItem('token') != null && localStorage.getItem('rol') != null ){
      localStorage.removeItem('token');
      localStorage.removeItem('rol');
      this.router.navigate(['login']);
      console.log('Paso por aca');
    }
  }

}
