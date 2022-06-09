import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../../../services/data.service';
import { statusResponse } from '../../../../modelos/tickets/statusResponse.interface';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(public modal: NgbModal, private data: DataService) { }

  ngOnInit(): void {
    this.showStatus();
  }

  public status: any = [];

  openST( status: any ){
    this.modal.open(status, {centered: true});
  }
  
  showStatus(){
    const status = {
      correo: sessionStorage.getItem("correo"),
      token: sessionStorage.getItem("token")
    }

    this.data.getStatus( status ).subscribe( data => {
      let dataResponse: statusResponse = data;
      console.log( dataResponse );
      this.status = dataResponse.body
    } )

  }

}
