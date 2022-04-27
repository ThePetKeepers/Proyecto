import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Entidades } from "../clases/entidades";

@Injectable()
export class EditarService{
    constructor(private conexHttp:HttpClient){}
    editarEntidad(nombre:String,clase:Number,descripcion:String,tipo:String,PKE:String,imagen:String,id:Number):Observable<any>{
        return this.conexHttp.post(
                "/CARPETA_PHP/entidadesMODIFY.php",
                {nombre,clase,descripcion,tipo,PKE,imagen,id},{headers:new HttpHeaders(
                    {'Content-Type':'application/json'})
               }
            );
         }
}