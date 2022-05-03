import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Servicio } from "../clases/servicio";
import { Suscriptor } from "../clases/suscriptor";
import { ServicioService } from "../services/servicio.service";
import { SuscriptorService } from "../services/suscriptor.service";

@Component({
    selector:'vistaservicio-comp',
    templateUrl:'vistaservicio.component.html',
    styleUrls:['vistaservicio.component.css'],
    providers:[SuscriptorService,ServicioService]
})

export class vistaservicioComponent implements OnInit{
    urlVal="";
    id = 0;
    suscriptor = new Suscriptor();
    servicio = new Servicio();

    cnt=false;
    constructor(private _activRoute:ActivatedRoute,private _suscriptorService: SuscriptorService, private _servicioService: ServicioService){}

    ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
            (params) => {
            this.urlVal = params.get("servicio")+"";    
            this.id = Number(this.urlVal);
        }
        );
        console.log(this.id);
        this._servicioService.getServiciosById(this.id)
            .subscribe(async (response) =>{

                this._suscriptorService.getSuscriptor(response['id_suscriptor'])
              .subscribe(async (resultado) => {
                console.log(resultado);
                this.suscriptor = new Suscriptor(
                    resultado.id, resultado.nombre,
                    resultado.primer_apellido, resultado.segundo_apellido,
                    resultado.email, resultado.password,
                    resultado.nacimiento, resultado.telefono,
                    resultado.ciudad,
                    resultado.direccion, resultado.foto,
                    resultado.mascotas, resultado.productos,
                    resultado.id_tipo_usuario, resultado.pago,
                    resultado.suscripcion, resultado.servicios
                );

                this.servicio = new Servicio(
                    response['id'], response['nombre'], response['descripcion'],
                    response['precio'], response['puntuacion'], response['activo'],
                    response['imagenes'], this.suscriptor
                )
                console.log(this.servicio)
            },(error) =>{
                console.log("Error: "+error);
            })
        
            }, (error) =>{
                console.log("Error: "+error);
            })

        }



    
}