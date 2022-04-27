import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLinkWithHref } from "@angular/router";
import { Entidades } from "../clases/entidades";
import { EditarService } from "../services/editar.service";
import { EntidadesService } from "../services/entidades.service";

@Component({
    selector:'vistaclasificacion-comp',
    templateUrl:'vistaclasificacion.component.html',
    styleUrls:['vistaclasificacion.component.css'],
    providers:[EntidadesService]
})


export class vistaclasificacionComponent implements OnInit{

    entidades:Array<Entidades>=[];

    constructor(private _entidadesService:EntidadesService,private _router: Router,
        private _activRoute: ActivatedRoute){

    }
    n="";
    val = 0;
    cnt=false;
    ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
            (params) => {
            this.n = params.get("clase")+"";
            this.val = parseInt(this.n);
                console.log(this.n);
            
            
        }
        );
     
        this._entidadesService.getEntidadAjax().
            subscribe(
                (resul)=>{
                    for(var i=0;i<resul.length;i++){
                        console.log(resul[i]);
                        this.entidades.push(resul[i]);
                        console.log(this.entidades);
                    }
                    
                    
             
                },
                (error)=>{
                    console.log(error);
                }
            );
    
    }

    borrarEntidad(){
        this._entidadesService.deleteEntidad(this.n)
        .subscribe(
            (result) => {
                alert(result);
                document.location.href = 'entidadesComponent/entidades.component.html';
            },(error)=>{console.log("error: ",error)}
        
        );    }
    
}