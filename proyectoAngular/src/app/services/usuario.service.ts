import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class UsuarioService {
    constructor(private conexHttp: HttpClient) { }
    getUserByEmail(email: String): Observable<any> {
        return this.conexHttp.get(
            "/Proyecto/CARPETA_PHP/getUserByEmail.php?email=" + email,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }


    getUsuarioById(id: Number): Observable<any> {
        return this.conexHttp.get(
            "/api/usuario/" + id,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }
}