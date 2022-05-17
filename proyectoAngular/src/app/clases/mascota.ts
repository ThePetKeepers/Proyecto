import { Objeto } from "./objeto";
import { Usuario } from "./usuario";

export class Mascota extends Objeto {
    usuario: number = -1;
    nombre_mascota:String="";

    constructor
        (
            id: number = -1, nombre: String = "",
            descripcion: String = "", precio: number = -1,
            puntuacion: number = -1, activo: boolean,
            imagenes: Array<String> = [], usuario: number = -1,
            nombre_mascota:String=""
        ) {
        super
            (
                id, nombre, descripcion, precio,
                puntuacion, activo, imagenes
            );
        this.usuario = usuario;
        this.nombre_mascota = nombre_mascota;
    }
}