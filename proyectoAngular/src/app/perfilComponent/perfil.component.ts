import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Usuario } from "../clases/usuario";
import { UsuarioService } from "../services/usuario.service";
//import { countries } from "./countries/country-data-store";

@Component({
    selector:'perfil-comp',
    templateUrl:'perfil.component.html',
    styleUrls:['perfil.component.css'],
    providers:[UsuarioService]
})


export class perfilComponent implements OnInit{
    //public countries: any = countries;
    constructor(private _activRoute:ActivatedRoute,private _usuarioService:UsuarioService){}
    urlVal="";
    id = 0;
    step = 0;
    usuario = new Usuario();
    ngOnInit(): void {
        this._activRoute.paramMap.subscribe(
            (params) => {
            this.urlVal = params.get("id")+"";    
            this.id = Number(this.urlVal);
        }
        );
        console.log(this.id);

        this._usuarioService.getUserById(this.id)
            .subscribe(async (resultado) =>{
                this.usuario = new Usuario(
                    resultado.id,resultado.nombre,resultado.primer_apellido,
                    resultado.segundo_apellido,resultado.email,resultado.password,
                    resultado.nacimiento,resultado.telefono,resultado.pais,
                    resultado.ciudad,resultado.direccion,resultado.foto,
                    resultado.mascotas
                )
            })
    }
    edit() {
        if(this.step == 0) {
            this.step = 1;
        } else if(this.step == 1){
            this.step = 0;
        }
    }
}
