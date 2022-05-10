import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Mascota } from "../clases/mascota";

@Injectable()
export class mascotaService {
    mascotas: Array<Mascota> = [];
    constructor(private conexHttp: HttpClient) { }

    getMascotasAjax(): Observable<any> {
        return this.conexHttp.get(
            "/Proyecto/CARPETA_PHP/mascotasGET.php",
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }


    getTop5Mascotas(): Observable<any> {
        return this.conexHttp.get(
            "/Proyecto/CARPETA_PHP/getTop5Mascotas.php",
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

}