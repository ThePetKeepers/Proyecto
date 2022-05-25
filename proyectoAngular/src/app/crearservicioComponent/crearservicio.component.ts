import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ServicioService } from "../services/servicio.service";
import { Servicio } from "../clases/servicio";
import { TokenService } from '../services/token.service';
import { UsuarioService } from '../services/usuario.service';
import { Token } from '../clases/token';
import { SuscriptorService } from "../services/suscriptor.service";
import { Suscriptor } from "../clases/suscriptor";

@Component({
  selector: 'crearservicio-comp',
  templateUrl: 'crearservicio.component.html',
  styleUrls: ['crearservicio.component.css'],
  providers: [
    ServicioService, TokenService,
    UsuarioService, SuscriptorService
  ]
})

export class crearservicioComponent implements OnInit {
  nombre = "";
  descripcion = "";
  precio = 0;
  filesToUpload: any;
  imagenes: Array<String> = [];
  servicio = new Servicio();
  suscriptor: Suscriptor = new Suscriptor;
  id = 0;

  constructor(
    private _servicio: ServicioService,
    private _activRoute: ActivatedRoute,
    private _tokenService: TokenService,
    private _usuarioService: UsuarioService,
    private _suscriptorService: SuscriptorService) {
  }

  ngOnInit(): void {
    //Si existe un token:
    if (localStorage.getItem("token")) {
      //Verificamos el token:
      this._tokenService.verificarToken(new Token(localStorage.getItem("token")!))
        .subscribe((verificacion) => {
          console.log("El token es: " + verificacion);
          //Obtenemos el Id del usuario
          this._tokenService.
            obtenerUsuarioByToken(new Token(localStorage.getItem("token")!))
            .subscribe((result) => {
              //Guardamos el usuario en una variable
              this._usuarioService.getUsuarioById(result)
                .subscribe((usuario) => {
                  this._suscriptorService.getSuscriptorByIdUsuario(usuario.id)
                    .subscribe((suscriptor) => {
                      this.suscriptor = suscriptor;
                    }, (e) => {
                      console.log("error: ", e);
                    });
                }, (er) => {
                  console.log("error: ", er);
                });
            }, (err) => {
              console.log("error: ", err);
            }
            );
        }, (error) => {
          console.log("error: ", error);
        });
    }
  }


  crearServicio() {
    this.servicio = new Servicio(
      -1, this.nombre, this.descripcion, this.precio,
      0, true, this.imagenes, this.suscriptor.id
    );

    this._servicio.postNuevoServicio(this.servicio).subscribe((result) => {
      console.log(result);
    });
    document.location.href = 'http://localhost:4200/';
  }

}
