import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Mascota } from "../clases/mascota";
import { Usuario } from "../clases/usuario";
import { mascotaService } from "../services/mascota.service";
import { UsuarioService } from "../services/usuario.service";
@Component({
    selector: 'vistamascota-comp',
    templateUrl: 'vistamascota.component.html',
    styleUrls: ['vistamascota.component.css'],
    providers: [mascotaService, UsuarioService]
})

export class vistamascotaComponent implements OnInit {

    constructor(
        private _activRoute: ActivatedRoute,
        private _mascotaService: mascotaService,
        private _usuarioService: UsuarioService
    ) { }
    id = "";
    cnt = false;
    mascota: Mascota = new Mascota();
    usuario: Usuario = new Usuario();

    ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
            (params) => {
                this.id = params.get("mascota") + "";
            }
        );

        this._mascotaService.getMascotaById(parseInt(this.id)).
            subscribe((resultado) => {
                console.log(resultado);
                this.mascota = resultado;
                this._usuarioService.getUsuarioById(this.mascota.usuario).
                    subscribe((resultado) => {
                        this.usuario = resultado;
                        console.log(this.usuario);
                    }, (err) => { console.log(err); }
                    );
            },
                (error) => {
                    console.log(error);
                }
            );

    }
}

