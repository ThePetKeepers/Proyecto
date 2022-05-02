package model;

//CLASES
import java.util.ArrayList;
//DEPENDENCIAS
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
//OBJETOS

public class Suscriptor extends Usuario {
	//ATRIBUTOS
	@JsonProperty("id_cliente")
	private int id_cliente;
	
	@JsonProperty("tipo_usuario")
	private int tipo_usuario;

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
			@JsonProperty("dni") final String dni,
			@JsonProperty("nacimiento") final String nacimiento,
			@JsonProperty("telefono") final String telefono,
			@JsonProperty("ciudad") final String ciudad,
			@JsonProperty("direccion") final String direccion,
			@JsonProperty("foto") final String foto,
			@JsonProperty("mascotas") final ArrayList<Mascota> mascotas,
			@JsonProperty("tipo_usuario") final int tipo_usuario,
			@JsonProperty("id_cliente") final int id_cliente,
			@JsonProperty("pago") final Pago pago,
			@JsonProperty("suscripcion") final Suscripcion suscripcion,
			@JsonProperty("servicios") final ArrayList<Servicio> servicios) {
		super(
			id, nombre, primer_apellido,
			segundo_apellido, email, password, 
			dni, nacimiento, telefono, ciudad, direccion, 
			foto, mascotas);
		this.id_cliente = id_cliente;
		this.tipo_usuario = tipo_usuario;
		this.pago = pago;
		this.suscripcion = suscripcion;
		this.servicios = servicios;
	}

	@JsonCreator
	public Suscriptor() {
		super();
	}
	
	//ENCAPSULACION
	@JsonProperty("id_cliente")
	public int getId_cliente() {
		return id_cliente;
	}
	
	@JsonProperty("tipo_usuario")
	public int getTipo_usuario() {
		return tipo_usuario;
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
