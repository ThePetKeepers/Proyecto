import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginServices } from "../services/login.service";
import { mascotaService } from "../services/mascota.service";

@Component({
    selector:'crearmascota-comp',
    templateUrl:'crearmascota.component.html',
    styleUrls:['crearmascota.component.css'],
    providers:[mascotaService]
})

export class crearmascotaComponent implements OnInit{
    nm="";
    nom="";
    des="";
    pre=0;
    filesToUpload: any;
    constructor(private _mascota: mascotaService,private _activRoute:ActivatedRoute) {

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

    crearMascota(){
        this._mascota.postNuevaMascota(this.nom,this.nm,this.des,this.pre,this.id,this.filesToUpload)
        .subscribe(
            (result) => {
                alert(result);

            },(error)=>{console.log("error: ",error); }

        )
    }


    
}