export class Pago {
    id: number = -1;
    tipo: String = "";
    descripcion: String = "";

    constructor
        (
            id: number = -1, tipo: String = "", descripcion: String = ""
        ) {
        this.id = id;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
}