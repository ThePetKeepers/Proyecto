import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Entidades } from "../clases/entidades";

@Injectable()
export class TokenService{

    constructor(private conexHttp:HttpClient){}

    getToken():Observable<any>{
        return this.conexHttp.get(
            "/Proyecto/CARPETA_PHP/repPeticiones.php",
            {headers:new HttpHeaders(
                {'Content-Type':'application/json','Authorization': ''+localStorage.getItem("token")})
           }
        );
    }

    getUsrToken():Observable<any>{
        return this.conexHttp.get(
            "/Proyecto/CARPETA_PHP/repUserToken.php",
            {headers:new HttpHeaders(
                {'Content-Type':'application/json','Authorization': ''+localStorage.getItem("token")})
           }
        );
    }
}