import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Servicio } from "../clases/servicio";
import { ServicioService } from "../services/servicio.service";

@Component({
    selector:'servicio-comp',
    templateUrl:'servicio.component.html',
    styleUrls:['servicio.component.css'],
    providers:[ServicioService]
})



export class servicioComponent implements OnInit{
    constructor(private _activRoute: ActivatedRoute, private _servicioService : ServicioService){}
    servicio:Array<Servicio>=[];
    n="";
    serv = "";

    limit=true;
    search='';
    buscador(){
      if(this.search == ''){
          this.limit=true;
      }else{
          this.limit=false;
      }
     
      }
  
      sendit(){
      if(this.search == ''){
          this.limit=true;
      }else{
          this.limit=false;
      }
      document.location.href = 'http://localhost:4200/servicio/'+this.search;
     }
    ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
            (params) => {
            this.n = params.get("tipo")+"";
            this.serv = this.n;
                console.log(this.n);
        }
        
      );
      this._servicioService.getServicioAjax().
      subscribe(
        (resul)=>{
            for(var i=0;i<resul.length;i++){
                console.log(resul[i]);
                this.servicio.push(resul[i]);
                console.log(this.servicio);
            }
            
            
     
        },
        (error)=>{
            console.log(error);
        }
    );
    }
    
}