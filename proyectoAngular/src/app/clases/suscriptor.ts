import { Usuario } from "./usuario";
import { Pago } from "./pago";
import { Suscripcion } from "./suscripcion";
import { Servicio } from "./servicio";
import { Mascota } from "./mascota";
import { Producto } from "./producto";

export class Suscriptor extends Usuario {
    id_tipo_usuario: String = "";
    pago: Pago = new Pago();
    suscripcion: Suscripcion = new Suscripcion();
    servicios:Array<Servicio> = [];

    constructor
        (
            id: number = -1, nombre: String = "",
            primer_apellido: String = "", segundo_apellido: String = "",
            email: String = "", password: String = "",
            nacimiento: String = "", telefono: String = "",
            ciudad: String = "",
            direccion: String = "", foto: String = "",
            mascotas:Array<Mascota> = [], productos:Array<Producto> = [],
            id_tipo_usuario: String = "", pago: Pago = new Pago(),
            suscripcion: Suscripcion = new Suscripcion(), 
            servicios:Array<Servicio> = []
        ) {
        super
            (
                id, nombre, primer_apellido, segundo_apellido,
                email, password, nacimiento, telefono,
                ciudad, direccion, foto, 
                mascotas, productos
            );
        this.id_tipo_usuario = id_tipo_usuario;
        this.pago = pago;
        this.suscripcion = suscripcion;
        this.servicios = servicios;
    }
}