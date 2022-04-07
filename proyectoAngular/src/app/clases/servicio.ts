import { Objeto } from "./objeto";
import { Suscriptor } from "./suscriptor";

export class Servicio extends Objeto {
    suscriptor: Suscriptor = new Suscriptor();

    constructor
        (
            id: number = -1, nombre: String = "",
            descripcion: String = "", precio: number = -1,
            puntuacion: number = -1, activo: boolean = false,
            imagen: Array<String> = [], suscriptor: Suscriptor = new Suscriptor()
        ) {
        super
            (
                id, nombre, descripcion, precio,
                puntuacion, activo, imagen
            );
        this.suscriptor = suscriptor;
    }
}