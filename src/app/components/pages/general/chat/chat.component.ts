import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  divChatChat: boolean = false;
  divChatGrupos: boolean = true;
  divChatGrupos2: boolean = true;
  divChatPersonas: boolean = false;
  divChatChatMensaje: boolean = false;

  ngOnInit(): void {
  }

  hideChatGrupos (){

    this.divChatChat = false;
    this.divChatPersonas = false;
    this.divChatGrupos = true;
  
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
