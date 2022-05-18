import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//import { Objeto } from "../clases/objeto";
import { Servicio } from "../clases/servicio";
//import { Suscriptor } from "../clases/suscriptor";

@Injectable()
export class ServicioService {
    constructor(private conexHttp: HttpClient) { }

    servicio = [new Servicio];
    getServicios(): Array<Servicio> {
        return this.servicio;
    }
    
    getTipoServicio(tipo: String): Servicio {
        var ser = new Servicio;
        for (var i = 0; i < this.servicio.length; i++) {
            if (this.servicio[i].nombre == tipo) {
                ser = this.servicio[i];
            }
        }
        return ser;
    }

    getServicioAjax(): Observable<any> {
        return this.conexHttp.get(
            "/Proyecto/CARPETA_PHP/servicioTipoGET.php",
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    getAllServicios(): Observable<any> {
        return this.conexHttp.get(
            "/api/servicio/",
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    getTop5Servicios(): Observable<any> {
        return this.conexHttp.get(
            "/api/servicio/top5",
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    getServiciosByName(nombre: String): Observable<any> {
        return this.conexHttp.get(
            "api/servicio/nombre=" + nombre,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    getServiciosById(id: Number): Observable<any> {
        return this.conexHttp.get(
            "/api/servicio/" + id,
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    postNuevoServicio(nom:string,des:string,pre:Number,id:Number,filesToUpload:FileList):Observable<any>{
        let url="/Proyecto/CARPETA_PHP/crearservicioPOST.php";
        let formData:FormData = new FormData();
       /* for (var i=0 ;i<filesToUpload.length;i++){
            let file = filesToUpload.item(i);
            if(file!=null){
                formData.append('file'+i,file,file.name);
            }
        }*/
        formData.append("nom",nom);
        formData.append("des",des);
        formData.append("pre",pre+"");
        formData.append("id",id+"");

        return this.conexHttp.post(url,formData);
    }

    
}