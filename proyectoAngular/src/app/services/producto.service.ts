import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class ProductoService {
    constructor(private conexHttp: HttpClient) { }


    getAllProductos(): Observable<any> {
        return this.conexHttp.get(
            "/CARPETA_PHP/getAllProductos.php",
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    getTop5Productos(): Observable<any> {
        return this.conexHttp.get(
            "/CARPETA_PHP/getTop5Productos.php",
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }
}