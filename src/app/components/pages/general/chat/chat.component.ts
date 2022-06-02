import { Component, OnInit } from '@angular/core';
import { groupResponse } from 'src/app/modelos/chat/groupResponse.interface';
import { DataService } from 'src/app/services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( public modal: NgbModal, private data: DataService ) { 
  }

  divChatChat: boolean = false;
  divChatGrupos: boolean = true;
  divChatGrupos2: boolean = true;
  divChatPersonas: boolean = false;
  divChatChatMensaje: boolean = false;
  public group : any = [];

  ngOnInit(): void {
    this.showGroup();
  }

  openCG(crear: any){
    this.modal.open(crear, {centered: true})
  }

  // ESTO LISTA LOS GRUPOS SEGUN USUARIO LOGUEADO
  showGroup(){
    const group = { correo: sessionStorage.getItem("correo"),
                    token: localStorage.getItem("token") }

    this.data.getGroup( group ).subscribe( data => {
      let dataResponse: groupResponse = data;
      console.log( dataResponse );
      this.group = dataResponse.body
    } )
  }

  hideChatGrupos (){

    this.divChatChat = false;
    this.divChatPersonas = false;
    this.divChatGrupos = true;
    this.divChatGrupos2 = true;
  
  }

  showChatChat( numChat: number ){

    this.divChatChatMensaje = true;
    this.divChatChat = true;
    this.divChatPersonas = false;

  }

  hideChatChat( numGrupo: number ){

    this.divChatPersonas = true;
    this.divChatChat = false;
    this.divChatChatMensaje = false;

  }

  showChatPersonas( numChat: number ){

    if( numChat == 1 ){

      this.divChatChat = false;
      this.divChatPersonas = true;
      this.divChatGrupos = false;
      this.divChatGrupos2 = false;

    }
    else{

      alert("Error");

    }

  }

  enviarMensaje(){

    // document.getElementById("divChat").innerHTML += "<h3>"+ ("#inputchat").val()+"</h3></br></br>";

  }

}
