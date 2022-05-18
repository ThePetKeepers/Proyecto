import { Component, OnInit } from "@angular/core";
import { Usuario } from "../clases/usuario";
import { Mascota } from "../clases/mascota";
import { RegistrarServices } from "../services/registrar.service";
import { countries } from "./countries/country-data-store";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'crearcuenta-comp',
    templateUrl: 'crearcuenta.component.html',
    styleUrls: ['crearcuenta.component.css'],
    providers: [RegistrarServices]
})

export class crearcuentaComponent implements OnInit {
    public countries: any = countries;
    constructor(private _registrar: RegistrarServices, protected router: Router, protected route: ActivatedRoute) {

    }
    ngOnInit(): void {
    }
    usuario = new Usuario();
    step = 0;
    cuenta: any[] = [];
    nombre = "";
    primerApellido = "";
    segundoApellido = "";
    email = "";
    password = "";
    dni = "";
    nacimiento = "";
    telefono = 0;
    ciudad = "";
    direccion = "";
    foto = "";
    mascotas: Array<Mascota> = [];
    filesToUpload: any;

    handleFileInput(event: Event) {
        const el = event.currentTarget as HTMLInputElement;
        let FileList: FileList | null = el.files;
        this.filesToUpload = FileList;
    }

    crearCuenta() {
        this.usuario = new Usuario(
            -1, this.nombre,
            this.primerApellido, this.segundoApellido,
            this.email, this.password,
            this.dni, this.nacimiento,
            String(this.telefono), this.ciudad,
            this.direccion, this.foto,
            this.mascotas
        );

        this._registrar.postUsuario(this.usuario).subscribe((result) => {
            console.log(result);
            this.router.navigate(['login']);
        });

    }

    nextStep() {
        if (this.step == 1) {
            this.step = 2;
        } else if (this.step == 0) {
            this.step = 1;
        }
    }

    backStep() {
        if (this.step == 1) {
            this.step = 0;
        } else if (this.step == 2) {
            this.step = 1;
        }
    }
}