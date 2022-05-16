import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioService } from "../services/usuario.service";

@Component({
    selector:'crearsubscription-comp',
    templateUrl:'crearsubscription.component.html',
    styleUrls:['crearsubscription.component.css'],
    providers:[UsuarioService]
})

export class crearsubscriptionComponent implements OnInit{
    constructor(private _activRoute:ActivatedRoute) {

    }
    urlVal="";
    id = 0;
      ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
          (params) => {
          this.urlVal = params.get("id")+"";    
          this.id = Number(this.urlVal);
      }
      );
      console.log(this.id);
      }
}