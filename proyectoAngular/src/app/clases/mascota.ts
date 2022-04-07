import { Objeto } from "./objeto";
import { Usuario } from "./usuario";

export class Mascota extends Objeto {
    usuario: Usuario = new Usuario();
    nombre_mascota:String="";

    constructor
        (
            id: number = -1, nombre: String = "",
            descripcion: String = "", precio: number = -1,
            puntuacion: number = -1, activo: boolean,
            imagen: Array<String>, usuario: Usuario = new Usuario(),
            nombre_mascota:String=""
        ) {
        super
            (
                id, nombre, descripcion, precio,
                puntuacion, activo, imagen
            );
        this.usuario = usuario;
        this.nombre_mascota = nombre_mascota;
    }
}