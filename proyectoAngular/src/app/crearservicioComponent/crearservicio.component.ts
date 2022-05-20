import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ServicioService } from "../services/servicio.service";
import { Servicio } from "../clases/servicio";

@Component({
  selector: 'crearservicio-comp',
  templateUrl: 'crearservicio.component.html',
  styleUrls: ['crearservicio.component.css'],
  providers: [ServicioService]
})

export class crearservicioComponent implements OnInit {
  nombre = "";
  descripcion = "";
  precio = 0;
  filesToUpload: any;
  imagenes: Array<String> = [];
  servicio = new Servicio();
  suscriptor: number = 1;

  constructor(private _servicio: ServicioService, private _activRoute: ActivatedRoute) {

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


  crearServicio() {
    this.servicio = new Servicio(
      -1, this.nombre, this.descripcion, this.precio,
      0, true, this.imagenes, this.suscriptor
    );

    this._servicio.postNuevoServicio(this.servicio).subscribe((result) => {
      console.log(result);
    });
    document.location.href = 'http://localhost:4200/';
  }

}
