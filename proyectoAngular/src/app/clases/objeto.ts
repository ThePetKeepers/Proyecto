export class Objeto {
    id: number = -1;
    nombre: String = "";
    descripcion: String = "";
    precio: number = -1;
    puntuacion: number = -1;
    activo: boolean = true;
    imagenes: Array<String> = [];

    constructor
        (
            id: number = -1, nombre: String = "",
            descripcion: String = "", precio: number = -1,
            puntuacion: number = -1, activo: boolean = true,
            imagenes: Array<String> = []
        ) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.puntuacion = puntuacion;
        this.activo = activo;
        this.imagenes = imagenes;
    }
}