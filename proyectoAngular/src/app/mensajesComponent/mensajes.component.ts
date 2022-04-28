import { Component, OnInit } from "@angular/core";

@Component({
    selector:'mensajes-comp',
    templateUrl:'mensajes.component.html',
    styleUrls:['mensajes.component.css']
   // providers:[LoginServices]
})

export class mensajesComponent implements OnInit{

    ngOnInit(): void {

    }
    borrarEntidad(){
        var chat = document.getElementById("chatLog")?.innerHTML;
        return chat += "AAA";
    }
}

