package model;

//CLASES
import java.util.ArrayList;
//DEPENDENCIAS
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
//OBJETOS

public class Mascota extends Objeto {
	//ATRIBUTOS
	@JsonProperty("usuario")
	private int usuario;
	
	@JsonProperty("nombre_mascota")
	private String nombre_mascota;

	//CONSTRUCTORES
	@JsonCreator
	public Mascota(
			@JsonProperty("id") final int id,
			@JsonProperty("nombre") final String nombre,
			@JsonProperty("descripcion") final String descripcion,
			@JsonProperty("precio") final double precio,
			@JsonProperty("puntuacion") final double puntuacion,
			@JsonProperty("activo") final boolean activo,
			@JsonProperty("imagenes") final ArrayList<String> imagenes,
			@JsonProperty("usuario") final int usuario,
			@JsonProperty("nombre_mascota") final String nombre_mascota) {
		super(id, nombre, descripcion, precio, puntuacion, activo, imagenes);
		this.usuario = usuario;
		this.nombre_mascota = nombre_mascota;
	}
	
	@JsonCreator
	public Mascota() {
		super();
	}
	
	//ENCAPSULACION
	@JsonProperty("usuario")
	public int getUsuario() {
		return usuario;
	}

	@JsonProperty("nombre_mascota")
	public String getNombre_mascota() {
		return nombre_mascota;
	}
	
}
