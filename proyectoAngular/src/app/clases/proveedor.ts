export class Proveedor {
    id: number = -1;
    nombre: String = "";
    cif: String = "";
    email: String = "";
    telefono: number = -1;
    pais: String = "";
    ciudad: String = "";
    direccion: String = "";

    constructor(
        id: number = -1, nombre: String = "",
        cif: String = "", email: String = "",
        telefono: number = -1, pais: String = "",
        ciudad: String = "", direccion: String = ""
    ) {
        this.id = id;
        this.nombre = nombre;
        this.cif = cif;
        this.email = email;
        this.telefono = telefono;
        this.pais = pais;
        this.ciudad = ciudad;
        this.direccion = direccion;
    }
}