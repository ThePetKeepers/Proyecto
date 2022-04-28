import { HttpParams } from "@angular/common/http";
import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Servicio } from "../clases/servicio";
import { Suscriptor } from "../clases/suscriptor";
import { ServicioService } from "../services/servicio.service";
import { SuscriptorService } from "../services/suscriptor.service";


@Component({
    selector: 'servicio-comp',
    templateUrl: 'servicio.component.html',
    styleUrls: ['servicio.component.css'],
    providers: [SuscriptorService, ServicioService]
})

export class servicioComponent implements OnInit {
    constructor(
        private _activRoute: ActivatedRoute,
        private _servicioService: ServicioService,
        private _suscriptorService: SuscriptorService

    ) { }
    servicios: Array<Servicio> = [];
    servicioPedido = "";

    limit = true;
    search = '';

    sendit() {
        if (this.search == '') {
            this.limit = true;
        } else {
            this.limit = false;
        }
        document.location.href = 'http://localhost:4200/servicio/' + this.search;
    }

    ngOnInit(): void {
        this._activRoute.paramMap.subscribe((params) => {
            this.servicioPedido = params.get("tipo") + "";
        });

        if (this.servicioPedido != "null") { //Buscar por nombre:
            this._servicioService.getServiciosByName(this.servicioPedido)
                .subscribe(async (resultado) => {
                    console.log(resultado)
                    for (let i of resultado) {
                        let suscriptor = new Suscriptor();
                        await this._suscriptorService.getSuscriptor(i['id_suscriptor']).subscribe((response) => {
                            suscriptor = new Suscriptor(
                                response.id, response.nombre,
                                response.primer_apellido, response.segundo_apellido,
                                response.email, response.password,
                                response.nacimiento, response.telefono,
                                response.ciudad,
                                response.direccion, response.foto,
                                response.mascotas, response.productos,
                                response.id_tipo_usuario, response.pago,
                                response.suscripcion, response.servicios
                            );
                        }, (errorSuscriptor) => {
                            console.log(errorSuscriptor);
                        });
                        let servicio = new Servicio(
                            i['id'], i['nombre'], i['descripcion'],
                            i['precio'], i['puntuacion'], i['activo'],
                            i['imagenes'], suscriptor
                        );
                        this.servicios.push(servicio);
                    }
                    console.log(this.servicios);
                }, (error) => {
                    console.log(error);
                });
        } else { //Buscar todos:
            console.log("Nada");
            this._servicioService.getAllServicios()
                .subscribe(async (resultado) => {
                    //console.log(resultado)
                    for (let i of resultado) {
                        let suscriptor = new Suscriptor();
                        await this._suscriptorService.getSuscriptor(i['id_suscriptor']).subscribe((response) => {
                            suscriptor = new Suscriptor(
                                response.id, response.nombre,
                                response.primer_apellido, response.segundo_apellido,
                                response.email, response.password,
                                response.nacimiento, response.telefono,
                                response.ciudad,
                                response.direccion, response.foto,
                                response.mascotas, response.productos,
                                response.id_tipo_usuario, response.pago,
                                response.responsecripcion, response.servicios
                            );
                        }, (errorSuscriptor) => {
                            console.log(errorSuscriptor);
                        });
                        let servicio = new Servicio(
                            i['id'], i['nombre'], i['descripcion'],
                            i['precio'], i['puntuacion'], i['activo'],
                            i['imagenes'], suscriptor
                        );
                        this.servicios.push(servicio);
                    }
                    console.log(this.servicios);
                }, (error) => {
                    console.log(error);
                });
        }
    }

}