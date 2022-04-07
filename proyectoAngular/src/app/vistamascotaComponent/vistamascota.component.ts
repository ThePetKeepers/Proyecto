import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Mascota } from "../clases/mascota";
import { mascotaService } from "../services/mascota.service";

@Component({
    selector:'vistamascota-comp',
    templateUrl:'vistamascota.component.html',
    styleUrls:['vistamascota.component.css'],
    providers:[mascotaService]
})

export class vistamascotaComponent implements OnInit{

    constructor(private _activRoute:ActivatedRoute, private _mascotaService:mascotaService){}
    urlVal="";
    cnt=false;
    mascota:Array<Mascota>=[];

    ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
            (params) => {
            this.urlVal = params.get("mascota")+"";
            
            
        }
        );
        this._mascotaService.getMascotasAjax().
        subscribe(        
            (resul)=>{
            for(var i=0;i<resul.length;i++){
                console.log(resul[i]);
                this.mascota.push(resul[i]);
                console.log(this.mascota);
            }
            
            
     
        },
        (error)=>{
            console.log(error);
        }
    );

    }
}

