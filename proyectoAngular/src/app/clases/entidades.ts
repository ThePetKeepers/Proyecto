export class Entidades {
    id: Number = -1;
    nombre: String = "";
    clase: Number = -1;
    descripcion: String = "";
    tipo: String = "";
    PKE: String = "";
    imagen: String = "";

    constructor(
        id: Number = -1, nombre: String = "",
        clase: Number = -1, descripcion: String = "",
        tipo: String = "", PKE: String = "", imagen: String = ""
    ) {
        this.id = id;
        this.nombre = nombre;
        this.clase = clase;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.PKE = PKE;
        this.imagen = imagen;
    }
}