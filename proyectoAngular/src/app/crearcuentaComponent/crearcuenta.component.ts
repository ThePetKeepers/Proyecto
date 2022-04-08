import { Component, OnInit } from "@angular/core";
import { Usuario } from "../clases/usuario";
import { RegistrarServices } from "../services/registrar.service";
import { countries } from "./countries/country-data-store";

@Component({
    selector:'crearcuenta-comp',
    templateUrl:'crearcuenta.component.html',
    styleUrls:['crearcuenta.component.css'],
    providers:[RegistrarServices]
})

export class crearcuentaComponent implements OnInit{
    public countries:any = countries;
    constructor (private _registrar: RegistrarServices){

    }
    ngOnInit(): void {
    }
    cuenta: any[] =[];
    nom="";
    ape1="";
    ape2="";
    cor="";
    con="";
    DNI="";
    nac="";
    tel=0;
    ciu="";
    dir="";
    img="";
    filesToUpload: any; 
    handleFileInput(event: Event){
        const el = event.currentTarget as HTMLInputElement;
        let FileList: FileList | null = el.files;
        this.filesToUpload = FileList;
    }

    crearCuenta(){
        this.cuenta=[{"nom":this.nom,"ape1":this.ape1,"ape2":this.ape2,"cor":this.cor,"con":this.con,"DNI":this.DNI,"nac":this.nac,"tel":this.tel,"ciu":this.ciu,"dir":this.dir}]
    
        this._registrar.postNuevaCuenta(this.nom,this.ape1,this.ape2,this.cor,this.con,this.DNI,this.nac,this.tel,this.ciu,this.dir,this.filesToUpload)
        .subscribe(
            (result) => {
                alert(result);

            },(error)=>{console.log("error: ",error); }

        )

    }
}