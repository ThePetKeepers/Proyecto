package model;

//CLASES
import java.util.ArrayList;
//DEPENDENCIAS
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
//OBJETOS

public class Suscriptor extends Usuario {
	//ATRIBUTOS
	@JsonProperty("id_tipo_usuario")
	private String id_tipo_usuario;

	@JsonProperty("pago")
	private Pago pago;

	@JsonProperty("suscripcion")
	private Suscripcion suscripcion;

	@JsonProperty("servicios")
	private ArrayList<Servicio> servicios = new ArrayList<>();

	//CONSTRUCTORES
	@JsonCreator
	public Suscriptor(
			@JsonProperty("id") final int id,
			@JsonProperty("nombre") final String nombre,
			@JsonProperty("primer_apellido") final String primer_apellido,
			@JsonProperty("segundo_apellido") final String segundo_apellido,
			@JsonProperty("email") final String email,
			@JsonProperty("password") final String password,
			@JsonProperty("telefono") final String telefono,
			@JsonProperty("ciudad") final String ciudad,
			@JsonProperty("direccion") final String direccion,
			@JsonProperty("foto") final String foto,
			@JsonProperty("mascotas") final ArrayList<Mascota> mascotas,
			@JsonProperty("productos") final ArrayList<Producto> productos,
			@JsonProperty("id_tipo_usuario") final String id_tipo_usuario,
			@JsonProperty("pago") final Pago pago,
			@JsonProperty("suscripcion") final Suscripcion suscripcion,
			@JsonProperty("servicios") final ArrayList<Servicio> servicios) {
		super(
			id, nombre, primer_apellido,
			segundo_apellido, email, password, 
			telefono, ciudad, direccion, 
			foto, mascotas, productos);
		this.id_tipo_usuario = id_tipo_usuario;
		this.pago = pago;
		this.suscripcion = suscripcion;
		this.servicios = servicios;
	}

	@JsonProperty("id_tipo_usuario")
	public String getId_tipo_usuario() {
		return id_tipo_usuario;
	}

	@JsonProperty("pago")
	public Pago getPago() {
		return pago;
	}

	@JsonProperty("suscripcion")
	public Suscripcion getSuscripcion() {
		return suscripcion;
	}

	@JsonProperty("servicios")
	public ArrayList<Servicio> getServicios() {
		return servicios;
	}
}
