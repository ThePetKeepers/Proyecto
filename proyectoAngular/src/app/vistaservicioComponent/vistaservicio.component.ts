import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Servicio } from "../clases/servicio";
import { Suscriptor } from "../clases/suscriptor";
import { ServicioService } from "../services/servicio.service";
import { SuscriptorService } from "../services/suscriptor.service";
import { ComentarioService } from "../services/comentario.service";
import { ComentarioServicio } from "../clases/comentarioServicio";

@Component({
    selector: 'vistaservicio-comp',
    templateUrl: 'vistaservicio.component.html',
    styleUrls: ['vistaservicio.component.css'],
    providers: [
        SuscriptorService,
        ServicioService,
        ComentarioService
    ]
})

export class vistaservicioComponent implements OnInit {
    urlVal = "";
    id = 0;
    suscriptor = new Suscriptor();
    servicio = new Servicio();
    idSuscriptor = -1;
    comentarios: Array<ComentarioServicio> = [];
    cnt = false;

    constructor(
        private _activRoute: ActivatedRoute,
        private _suscriptorService: SuscriptorService,
        private _servicioService: ServicioService,
        private _comentarioService: ComentarioService
    ) { }

    ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
            (params) => {
                this.urlVal = params.get("servicio") + "";
                this.id = Number(this.urlVal);
            }
        );
        this._servicioService.getServicioById(this.id).subscribe((response) => {
            this.servicio = response;
            console.log(this.servicio);
            //Suscriptor creador del servicio
            this._suscriptorService.getSuscriptorById(this.servicio.suscriptor)
                .subscribe((response) => {
                    this.suscriptor = response;
                }, (err) => { console.log("Error: " + err) });
            //Comentarios del servicio
            this._comentarioService.getServicioComentariosByIdServicio(this.servicio.id)
                .subscribe((response) => {
                    this.comentarios.push(response);
                    console.log(this.comentarios);
                }, (er) => { console.log("Error: " + er) });
        }, (error) => {
            console.log("Error: " + error);
        });
    }
}