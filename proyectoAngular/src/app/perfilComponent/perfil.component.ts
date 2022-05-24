import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Servicio } from "../clases/servicio";
import { Usuario } from "../clases/usuario";
import { ServicioService } from "../services/servicio.service";
import { UsuarioService } from "../services/usuario.service";
//import { countries } from "./countries/country-data-store";

@Component({
    selector:'perfil-comp',
    templateUrl:'perfil.component.html',
    styleUrls:['perfil.component.css'],
    providers:[UsuarioService,ServicioService]
})


export class perfilComponent implements OnInit{
    //public countries: any = countries;
    constructor(private _activRoute:ActivatedRoute,private _usuarioService:UsuarioService,private _servicioService:ServicioService){}
    urlVal="";
    id = 0;
    step = 0;
    usuario = new Usuario();
    servicios: Array<Servicio> = [];
    cantidadServicios: number = 0;

    ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
            (params) => {
            this.urlVal = params.get("id")+"";    
            this.id = Number(this.urlVal);
        }
        );
        console.log(this.id);

        this._usuarioService.getUsuarioById(this.id)
            .subscribe(async (resultado) =>{
                this.usuario = new Usuario(
                    resultado.id,resultado.nombre,resultado.primer_apellido,
                    resultado.segundo_apellido,resultado.email,resultado.password,
                    resultado.nacimiento,resultado.telefono,resultado.pais,
                    resultado.ciudad,resultado.direccion,resultado.foto, resultado.tipo_usuario,
                    resultado.mascotas
                )
            })
        this._servicioService.getServiciosBySuscriptorId(this.id)
            .subscribe(async (resultado) =>{
                for (let i of resultado) {
                    let servicio = new Servicio(
                        i['id'], i['nombre'], i['descripcion'],
                        i['precio'], i['puntuacion'], i['activo'],
                        i['imagenes'], i['suscriptor']
                    );
                    this.cantidadServicios = ++this.cantidadServicios;
                    this.servicios.push(servicio);
                }
            })
            console.log(this.servicios);
    }
    edit() {
        if(this.step == 0) {
            this.step = 1;
        } else if(this.step == 1){
            this.step = 0;
        }
    }
}
