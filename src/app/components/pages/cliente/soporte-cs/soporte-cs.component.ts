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

  // Esto abre el modal para crear un ticket
  openSM(crearTicket: any){
    this.modal.open(crearTicket, {centered: true});
  }

  // Esto abre el modal para actualizar un ticket
  openUT(updateTicket: any){
    this.modal.open(updateTicket, {centered: true});
  }

  openLT(listarTicket: any){
    this.modal.open(listarTicket, {centered: true});
  }

  openDOC(documentacion: any){
    this.modal.open(documentacion, {centered: true});
  }

}
