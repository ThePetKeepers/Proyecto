import { Mascota } from "./mascota";
import { Producto } from "./producto";

export class Usuario {
    id: number = -1;
    nombre: String = "";
    primer_apellido: String = "";
    segundo_apellido: String = "";
    email: String = "";
    password: String = "";
    nacimiento: String = "";
    telefono: String = "";
    ciudad: String = "";
    direccion: String = "";
    foto: String = "";
    mascotas:Array<Mascota> = [];
    productos:Array<Producto> = [];

    constructor(
        id: number = -1, nombre: String = "",
        primer_apellido: String = "", segundo_apellido: String = "",
        email: String = "", password: String = "",
        nacimiento: String = "", telefono: String = "",
        ciudad: String = "",
        direccion: String = "", foto: String = "",
        mascotas:Array<Mascota> = [], productos:Array<Producto> = []
    ) {
        this.id = id;
        this.nombre = nombre;
        this.primer_apellido = primer_apellido;
        this.segundo_apellido = segundo_apellido;
        this.email = email;
        this.password = password;
        this.nacimiento = nacimiento;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.foto = foto;
        this.mascotas = mascotas;
        this.productos = productos;
    }
}