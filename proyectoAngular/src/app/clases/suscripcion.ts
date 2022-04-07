export class Suscripcion {
    id: number = -1;
    tipo: String = "";
    precio: String = "";
    descripcion: String = "";

    constructor(
        id: number = -1, tipo: String = "",
        descripcion: String = "", precio: String = ""
    ) {
        this.id = id;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}