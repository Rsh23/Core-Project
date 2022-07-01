import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators, FormGroup } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../../../services/data.service';
import { priorityResponse } from '../../../../modelos/tickets/priorityResponse.interface';
import { statusResponse } from '../../../../modelos/tickets/statusResponse.interface';
import Swal from 'sweetalert2';
import { Ticket } from 'src/app/modelos/tickets/createTicket.interface';

@Component({
  selector: 'app-soporte-cs',
  templateUrl: './soporte-cs.component.html',
  styleUrls: ['./soporte-cs.component.css']
})
export class SoporteCSComponent implements OnInit {

  public ticketForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    priority: ['', Validators.required],
    status: ['', Validators.required]
  });

  constructor( public modal: NgbModal, private data: DataService, private formBuilder: FormBuilder ) {
    this.showOption();
    this.getPriority();
    this.getStatus();
   }

  rol1: boolean = false;
  rol2: boolean = false;
  rol3: boolean = false;

  ngOnInit(): void {
  }

  createTicket( ticket: Ticket ){
    if( this.ticketForm.valid ){
      this.modal.dismissAll();
      Swal.fire({
        title: 'Ticket creado con exito!',
        icon: 'success',
        confirmButtonText: 'Ok'
      }) 
      this.ticketForm.reset();
    }
    else{
      this.modal.dismissAll();
      Swal.fire({
        title: 'Error!',
        text: 'Complete todos los campos correctamente',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

  // Esto abre el modal
  openModal(crearTicket: any){
    this.modal.open(crearTicket, {centered: true});
  }

  public prioridades: any = [];

  getPriority(){
    const datos = { correo: sessionStorage.getItem("correo"),
                    token: localStorage.getItem("token") 
    }

    this.data.getPriority( datos ).subscribe( data => {
      let dataResponse: priorityResponse = data;
      this.prioridades = dataResponse.body;
    } );
  }

  public estados: any = [];

  getStatus(){
    const datos = { correo: sessionStorage.getItem("correo"),
                    token: localStorage.getItem("token")
    }

    this.data.getStatus( datos ).subscribe( data => {
      let dataResponse: statusResponse = data;
      this.estados = dataResponse.body;
    } );

  }

  showOption(){
    if( this.data.showOption() ){
      return this.rol1 = true;
    }
    else if ( this.data.showOption2() ){
      return this.rol2 = true;
    }
    else if( this.data.showOption3() ){
      return this.rol3 = true;
    }
    else{
      return false;
    }
  }

}
