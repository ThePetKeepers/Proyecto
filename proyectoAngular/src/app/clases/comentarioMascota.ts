import { Comentario } from "./comentario";

export class ComentarioMascota extends Comentario {
    id_mascota: number = -1;
    id_suscriptor: number = -1;

    constructor
        (
            id: number = -1, comentario: String = "", fecha: String = "",
            id_mascota: number = -1, id_suscriptor: number = -1
            ) {
        super
            (
                id, comentario, fecha,
            );
        this.id_mascota = id_mascota;
        this.id_suscriptor = id_suscriptor;

    }
}