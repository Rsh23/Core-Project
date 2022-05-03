import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
    this.showOption1();
    this.showOption2();
    this.showOption3();
   }

   
  ngOnInit(): void {
  }

  showOption1(){
    if( sessionStorage.getItem('rol') == '1' ){
      return true;
    
    }
    else{
      return false;
    }  
  }
  showOption2(){
    if( sessionStorage.getItem('rol') == '2'){
      return true;
    }
    else{
      return false;
    }
  }
  showOption3(){
    if( sessionStorage.getItem('rol') == '3'){
      return true;
    }
    else{
      return false;
    }
  }

  
}
