import { Comentario } from "./comentario";

export class ComentarioServicio extends Comentario {
    id_servicio: number = -1;
    id_usuario: number = -1;

    constructor
        (
            id: number = -1, comentario: String = "", fecha: String = "",
            id_servicio: number = -1, id_usuario: number = -1
            ) {
        super
            (
                id, comentario, fecha,
            );
        this.id_servicio = id_servicio;
        this.id_usuario = id_usuario;

    }
}