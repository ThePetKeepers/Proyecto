import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SuscriptorService } from "../services/suscriptor.service";
import { UsuarioService } from "../services/usuario.service";

@Component({
    selector:'crearsubscription-comp',
    templateUrl:'crearsubscription.component.html',
    styleUrls:['crearsubscription.component.css'],
    providers:[UsuarioService,SuscriptorService]
})

export class crearsubscriptionComponent implements OnInit{
    constructor(private _activRoute:ActivatedRoute, private _suscriptor:SuscriptorService) {

    }
    urlVal="";
    id = 0;
    type=0;


      ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
          (params) => {
          this.urlVal = params.get("id")+"";    
          this.id = Number(this.urlVal);
          this.urlVal = params.get("type")+"";
          this.type = Number(this.urlVal);
      }
      );
      console.log(this.id+" - "+this.type);

      
      }
      pagar(payment:Number) {
        this._suscriptor.newSuscriptor(this.id,this.type,payment)
        .subscribe(
          (result) => {
            console.log(result);
          },(error)=>{
          
            console.log("error: ",error);
          }

      )
    }


}