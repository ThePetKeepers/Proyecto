import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entidades } from '../clases/entidades';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable()
export class RegistrarServices{

constructor(private conexHttp:HttpClient) { }


postEntidadAjax(nombre:String,clase:Number,descripcion:String,tipo:String,PKE:String,imagen:String):Observable<any>{
    let formData:FormData= new FormData();  
    return this.conexHttp.post(
            "/CARPETA_PHP/entidadesPOST.php",
            {nombre,clase,descripcion,tipo,PKE,imagen},{headers:new HttpHeaders(
                {'Content-Type':'application/json'})
           }
        );
     }
    postFiles(nombre:string,clase:Number,descripcion:string,tipo:string,PKE:string,filesToUpload:FileList):Observable<any>{
        let url="/CARPETA_PHP/entidadesPOST.php";
        let formData:FormData = new FormData();
        for (var i=0 ;i<filesToUpload.length;i++){
            let file = filesToUpload.item(i);
            if(file!=null){
                formData.append('file'+i,file,file.name);
            }
        }
        formData.append('nombre',nombre);
        formData.append('clase',clase+"");
        formData.append('descripcion',descripcion);
        formData.append('tipo',tipo);
        formData.append('PKE',PKE);


     //   return this.conexHttp.post(url,{nombre,clase,descripcion,tipo,PKE,formData});
     return this.conexHttp.post(url,formData);

    }

    postNuevaCuenta(cuenta:any):Observable<any>{
        let url="/CARPETA_PHP/crearcuentaPOST.php";
        let formData:FormData= new FormData();
        formData.append("a","dsa");
        return this.conexHttp.post(url,formData);
    }
/*
     postFiles(filesToUpload:FileList):Observable<any>{
         let url="postFiles.php";
         let formData:FormData= new FormData();
         for(var i=0; i<filesToUpload.length ; i++){
             let file = filesToUpload.item(i);
             if(file != null){
                formData.append('file'+i, file, file.name);
             }
         }
         return this.conexHttp.post(url,formData);
     }*/
/*
     postEntidadAjax2(entidad:Entidades):Observable<any>{
         let formData:FormData= new FormData();
         formData.append("nombre",entidad.nombre);
         formData.append("clase",entidad.clase)
        return this.conexHttp.post(
            "/CARPETA_PHP/entidadesPOST.php",
            {entidad},{headers:new HttpHeaders(
                {'Content-Type':'application/json'})
           }
        );
     }*/

}