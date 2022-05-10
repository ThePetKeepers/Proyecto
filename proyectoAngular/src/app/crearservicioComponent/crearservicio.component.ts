import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Entidades } from "../clases/entidades";
import { EntidadesService } from "../services/entidades.service";
import { LoginServices } from "../services/login.service";
import { ServicioService } from "../services/servicio.service";

@Component({
    selector:'crearservicio-comp',
    templateUrl:'crearservicio.component.html',
    styleUrls:['crearservicio.component.css'],
    providers:[ServicioService]
})

export class crearservicioComponent implements OnInit{
  nom="";
  des="";
  pre=0;
  filesToUpload: any;
  constructor(private _servicio: ServicioService,private _activRoute:ActivatedRoute) {

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


    crearServicio(){
      this._servicio.postNuevoServicio(this.nom,this.des,this.pre,this.id,this.filesToUpload)
        .subscribe(
            (result) => {
              alert(result);
            },(error)=>{
            
              console.log("error: ",error);
            }

        )
    }
    
}
