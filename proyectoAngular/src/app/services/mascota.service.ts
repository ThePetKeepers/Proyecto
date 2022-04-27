import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Mascota } from "../clases/mascota";

@Injectable()
export class mascotaService{
    mascotas:Array<Mascota>=[];
    constructor(private conexHttp:HttpClient){}

    getMascotasAjax():Observable<any>{
        return this.conexHttp.get(
            "/CARPETA_PHP/mascotasGET.php",
            {headers:new HttpHeaders(
                {'Content-Type':'application/json'})
               
           }
        );
    }

}