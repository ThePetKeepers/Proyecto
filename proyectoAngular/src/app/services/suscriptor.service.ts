import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Suscriptor } from "../clases/suscriptor";

@Injectable()
export class SuscriptorService {
    constructor(private conexHttp: HttpClient) { }

    getSuscriptor(id: number): Observable<any> {
        return this.conexHttp.get(
            "/Proyecto/CARPETA_PHP/getSuscriptor.php?id=" + id,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    getAllSuscriptores(): Observable<any> {
        return this.conexHttp.get(
            "/Proyecto/CARPETA_PHP/getAllSuscriptores.php", 
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    newSuscriptor(id:Number,type:Number,payment:Number): Observable<any>{
        let url="/Proyecto/CARPETA_PHP/nuevoSuscriptor.php";
        let formData:FormData = new FormData();
        formData.append("id",id+"");
        formData.append("type",type+"");
        formData.append("payment",payment+"");

        return this.conexHttp.post(url,formData);
    }
}