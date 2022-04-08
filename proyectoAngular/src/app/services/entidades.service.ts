import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Entidades } from "../clases/entidades";

@Injectable()
export class EntidadesService{

    entidades= [new Entidades];
    getEntidades():Array<Entidades>{
        return this.entidades;
    }
    getEntidad(nam:String):Entidades{
        var enti =new Entidades;
        for(var i=0;i<this.entidades.length;i++){
            if(this.entidades[i].nombre == nam){
                enti = this.entidades[i];
            }
        }
        return enti;
    }

    getEntidadId(id:Number):Entidades{
        var enti =new Entidades;
        for(var i=0;i<this.entidades.length;i++){
            if(this.entidades[i].id == id){
                enti = this.entidades[i];
            }
        }
        return enti;
    }

    addEntidad(ent:Entidades){
        this.entidades.push(ent);
    }

    deleteEntidad(nombre:String):Observable<any>{
        return this.conexHttp.post(
                "/Proyecto/CARPETA_PHP/entidadesDELETE.php",
                {nombre},{headers:new HttpHeaders(
                    {'Content-Type':'application/json'})
               }
            );
         }
    postEntidadAjax(nombre:String,clase:Number,descripcion:String,tipo:String,PKE:String,imagen:String):Observable<any>{
        return this.conexHttp.post(
                "/Proyecto/CARPETA_PHP/entidadesPOST.php",
                {nombre,clase,descripcion,tipo,PKE,imagen},{headers:new HttpHeaders(
                    {'Content-Type':'application/json'})
               }
            );
         }
    constructor(private conexHttp:HttpClient){}

    
    getEntidadAjax():Observable<any>{
        return this.conexHttp.get(
            "/Proyecto/CARPETA_PHP/entidadesGET.php",
            {headers:new HttpHeaders(
                {'Content-Type':'application/json'})
               
           }
        );
    }
    getUnaEntidadAjax(id:Number):Observable<any>{
        return this.conexHttp.post(
            "/Proyecto/CARPETA_PHP/entidadGET.php",
            {id},{headers:new HttpHeaders(
                {'Content-Type':'application/json'})
           }
        );
    }

    getToken():Observable<any>{
        return this.conexHttp.get(
            "/Proyecto/CARPETA_PHP/repPeticiones.php",
            {headers:new HttpHeaders(
                {'Content-Type':'application/json','Authorization': ''+localStorage.getItem("token")})
           }
        );
    }
}