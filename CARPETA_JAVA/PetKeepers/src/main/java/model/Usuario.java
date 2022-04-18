package model;

//CLASES
import java.util.ArrayList;
//DEPENDENCIAS
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
//OBJETOS

public class Usuario {
	// ATRIBUTOS
	@JsonProperty("id")
	private int id;

	@JsonProperty("nombre")
	private String nombre;
	
	@JsonProperty("primer_apellido")
	private String primer_apellido;

	@JsonProperty("segundo_apellido")
	private String segundo_apellido;

	@JsonProperty("email")
	private String email;

	@JsonProperty("password")
	private String password;

	@JsonProperty("telefono")
	private String telefono;

	@JsonProperty("ciudad")
	private String ciudad;
	
	@JsonProperty("direccion")
	private String direccion;
	
	@JsonProperty("foto")
	private String foto;
	
	@JsonProperty("mascotas")
    private ArrayList<Mascota> mascotas = new ArrayList<>();

	@JsonProperty("productos")
    private ArrayList<Producto> productos = new ArrayList<>();

	//CONSTRUCTORES
	@JsonCreator
	public Usuario(
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
			@JsonProperty("productos") final ArrayList<Producto> productos) {
		this.id = id;
		this.nombre = nombre;
		this.primer_apellido = primer_apellido;
		this.segundo_apellido = segundo_apellido;
		this.email = email;
		this.password = password;
		this.telefono = telefono;
		this.ciudad = ciudad;
		this.direccion = direccion;
		this.foto = foto;
		this.mascotas = mascotas;
		this.productos = productos;
	}

	//ENCAPSULACION
	@JsonProperty("id")
	public int getId() {
		return id;
	}
	@JsonProperty("id")
	public void setId(int id) {
		this.id = id;
	}

	@JsonProperty("nombre")
	public String getNombre() {
		return nombre;
	}

	@JsonProperty("primer_apellido")
	public String getPrimer_apellido() {
		return primer_apellido;
	}

	@JsonProperty("segundo_apellido")
	public String getSegundo_apellido() {
		return segundo_apellido;
	}

	@JsonProperty("email")
	public String getEmail() {
		return email;
	}

	@JsonProperty("password")
	public String getPassword() {
		return password;
	}

	@JsonProperty("telefono")
	public String getTelefono() {
		return telefono;
	}

	@JsonProperty("ciudad")
	public String getCiudad() {
		return ciudad;
	}

	@JsonProperty("direccion")
	public String getDireccion() {
		return direccion;
	}

	@JsonProperty("foto")
	public String getFoto() {
		return foto;
	}

	@JsonProperty("mascotas")
	public ArrayList<Mascota> getMascotas() {
		return mascotas;
	}

	@JsonProperty("productos")
	public ArrayList<Producto> getProductos() {
		return productos;
	}
	
	

}
