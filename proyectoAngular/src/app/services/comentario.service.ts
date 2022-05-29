import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ComentarioService {
    constructor(private conexHttp: HttpClient) { }

    getMascotaComentariosByIdMascota(idMascota: number): Observable<any> {
        return this.conexHttp.get(
            "/api/mascota/comentarios/" + idMascota,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    getServicioComentariosByIdServicio(idServicio: number): Observable<any> {
        return this.conexHttp.get(
            "/api/servicio/comentarios/" + idServicio,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

}