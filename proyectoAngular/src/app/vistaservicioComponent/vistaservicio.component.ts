import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Servicio } from "../clases/servicio";
import { Suscriptor } from "../clases/suscriptor";
import { ServicioService } from "../services/servicio.service";
import { SuscriptorService } from "../services/suscriptor.service";

@Component({
    selector: 'vistaservicio-comp',
    templateUrl: 'vistaservicio.component.html',
    styleUrls: ['vistaservicio.component.css'],
    providers: [SuscriptorService, ServicioService]
})

export class vistaservicioComponent implements OnInit {
    urlVal = "";
    id = 0;
    suscriptor = new Suscriptor();
    servicio = new Servicio();
    idSuscriptor = -1;

    cnt = false;
    constructor(private _activRoute: ActivatedRoute, private _suscriptorService: SuscriptorService, private _servicioService: ServicioService) { }

    ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
            (params) => {
                this.urlVal = params.get("servicio") + "";
                this.id = Number(this.urlVal);
            }
        );
        this._servicioService.getServiciosById(this.id).subscribe((response) => {
            this.servicio = response;
            console.log(this.servicio);
            this._suscriptorService.getSuscriptorById(this.servicio.suscriptor)
                .subscribe((response) => {
                    this.suscriptor = response;
                    console.log(this.suscriptor)
                }, (err) => {
                    console.log("Error: " + err);
                });
        }, (error) => {
            console.log("Error: " + error);
        });
    }
}