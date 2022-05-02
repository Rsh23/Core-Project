import { Component, OnInit } from '@angular/core';
import { ResponseI } from '../../../modelos/response.interface';
import { DataService } from '../../../services/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginI } from '../../../modelos/login.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private dataSvc: DataService, private router: Router ) { }


  ngOnInit(): void {
  }

  
}
