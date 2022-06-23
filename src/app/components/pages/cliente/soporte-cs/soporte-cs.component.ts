import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-soporte-cs',
  templateUrl: './soporte-cs.component.html',
  styleUrls: ['./soporte-cs.component.css']
})
export class SoporteCSComponent implements OnInit {

  constructor( public modal: NgbModal ) { }

  ngOnInit(): void {
  }

  // Esto abre el modal
  openModal(crearTicket: any){
    this.modal.open(crearTicket, {centered: true});
  }

}
