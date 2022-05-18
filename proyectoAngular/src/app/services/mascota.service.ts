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
            "/api/mascota/top5",
            {
                headers: new HttpHeaders(
                    { 'Content-Type': 'application/json' })
            }
        );
    }

    postNuevaMascota(nom:string,nm:string,des:string,pre:Number,id:Number,filesToUpload:FileList):Observable<any>{
        let url="/Proyecto/CARPETA_PHP/crearmascotaPOST.php";
        let formData:FormData = new FormData();
       /* for (var i=0 ;i<filesToUpload.length;i++){
            let file = filesToUpload.item(i);
            if(file!=null){
                formData.append('file'+i,file,file.name);
            }
        }*/
        formData.append("nom",nom);
        formData.append("nm",nm);
        formData.append("des",des);
        formData.append("pre",pre+"");
        formData.append("id",id+"");
        return this.conexHttp.post(url,formData);
    }

}