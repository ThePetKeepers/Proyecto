import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginServices } from "../services/login.service";
import { mascotaService } from "../services/mascota.service";
import { Mascota } from "../clases/mascota";
import { Servicio } from "../clases/servicio";

@Component({
    selector: 'crearmascota-comp',
    templateUrl: 'crearmascota.component.html',
    styleUrls: ['crearmascota.component.css'],
    providers: [mascotaService]
})

export class crearmascotaComponent implements OnInit {
    nombreMascota = "";
    nombre = "";
    tipo = "";
    descripcion = "";
    precio = 0;
    filesToUpload: any;
    imagenes: Array<String> = [];
    mascota = new Mascota();
    servicio = new Servicio();

    usuario: number = 1;

    constructor(private _mascota: mascotaService, private _activRoute: ActivatedRoute) {

    }
    urlVal = "";
    id = 0;
    ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
            (params) => {
                this.urlVal = params.get("id") + "";
                this.id = Number(this.urlVal);
            }
        );
        console.log(this.id);
    }

    crearMascota() {
        this.mascota = new Mascota(
            -1, this.nombre, this.tipo, this.descripcion, this.precio,
            0, true, this.imagenes, this.usuario,
            this.nombreMascota
        );

        this._mascota.postNuevaMascota(this.mascota).subscribe((result) => {
            console.log(result);
        });
        document.location.href = 'http://localhost:4200/';
    }



}