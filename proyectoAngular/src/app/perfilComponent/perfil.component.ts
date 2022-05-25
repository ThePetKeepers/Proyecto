import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Servicio } from "../clases/servicio";
import { Usuario } from "../clases/usuario";
import { ServicioService } from "../services/servicio.service";
import { UsuarioService } from "../services/usuario.service";
import { TokenService } from '../services/token.service';
import { Token } from '../clases/token';
import { Suscriptor } from "../clases/suscriptor";
import { SuscriptorService } from "../services/suscriptor.service";

@Component({
    selector: 'perfil-comp',
    templateUrl: 'perfil.component.html',
    styleUrls: ['perfil.component.css'],
    providers: [
        UsuarioService,
        ServicioService,
        TokenService,
        SuscriptorService
    ]
})


export class perfilComponent implements OnInit {
    constructor(
        private _activRoute: ActivatedRoute,
        private _usuarioService: UsuarioService,
        private _servicioService: ServicioService,
        private _tokenService: TokenService,
        private _suscriptorService: SuscriptorService
    ) { }

    urlVal = "";
    step = 0;
    service = 0;
    usuario = new Usuario();
    servicios: Array<Servicio> = [];
    cantidadServicios: number = 0;
    suscriptor: Suscriptor = new Suscriptor();

    ngOnInit(): void {
        //Si existe un token:
        if (localStorage.getItem("token")) {
            //Verificamos el token:
            this._tokenService.verificarToken(new Token(localStorage.getItem("token")!))
                .subscribe((verificacion) => {
                    //Obtenemos el Id del usuario
                    this._tokenService.
                        obtenerUsuarioByToken(new Token(localStorage.getItem("token")!))
                        .subscribe((result) => {
                            //Guardamos el usuario en una variable
                            this._usuarioService.getUsuarioById(result)
                                .subscribe((usuario) => {
                                    this.usuario = usuario;
                                    //Si el usuario es suscriptor lo guardamos en una var
                                    if (this.usuario.tipo_usuario != 1) {
                                        this._suscriptorService.getSuscriptorByIdUsuario(usuario.id)
                                            .subscribe((suscriptor) => {
                                                this.suscriptor = suscriptor;
                                                this._servicioService.
                                                getServiciosBySuscriptorId(this.suscriptor.id)
                                                    .subscribe((servicios) => {
                                                        for (let i of servicios) {
                                                            let servicio = new Servicio(
                                                                i['id'], i['nombre'], i['descripcion'],
                                                                i['precio'], i['puntuacion'], i['activo'],
                                                                i['imagenes'], i['suscriptor']
                                                            );
                                                            this.cantidadServicios = ++this.cantidadServicios;
                                                            this.servicios.push(servicio);
                                                        }
                                                    }, (r) => { console.log("error: ", r) });
                                            }, (e) => { console.log("error: ", e) });
                                    }
                                }, (er) => { console.log("error: ", er) });
                        }, (err) => { console.log("error: ", err) });
                }, (error) => { console.log("error: ", error) });
        }
    }

    edit() {
        if (this.step == 0) {
            this.step = 1;
            this.service = 0;
        } else if (this.step == 1) {
            this.step = 0;
        }
    }

    services() {
        if (this.service == 0) {
            this.service = 1;
            this.step = 0;
        } else if (this.service == 1) {
            this.service = 0;
        }
    }
}
