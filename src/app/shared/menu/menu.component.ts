import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { logOutResponse } from '../../modelos/logOut/logOutResponse.interface';
import Swal from 'sweetalert2'

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
    if( this.activo == false ){
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark')
      this.activo = true;
    }
    else{
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light')
      this.activo = false;
    }
  }

  logOut(){
    const data = {
      correo: sessionStorage.getItem('correo'),
      token: localStorage.getItem('token')
    }

    Swal.fire({
      title: '¿Estas seguro de cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.logOut(data).subscribe( data => {
          let dataResponse: logOutResponse = data;
          localStorage.removeItem('token');
          localStorage.removeItem('rol');
          this.router.navigate(['login']);
        } )
      }
    })
  }
}
