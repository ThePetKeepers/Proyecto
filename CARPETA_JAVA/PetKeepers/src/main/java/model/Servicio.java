package model;

//CLASES
import java.util.ArrayList;
//DEPENDENCIAS
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
//OBJETOS

public class Servicio extends Objeto {
	// ATRIBUTOS
	@JsonProperty("suscriptor")
	private Suscriptor suscriptor;

	// CONSTRUCTORES
	@JsonCreator
	public Servicio(
			@JsonProperty("id") final int id,
			@JsonProperty("nombre") final String nombre,
			@JsonProperty("descripcion") final String descripcion,
			@JsonProperty("precio") final double precio,
			@JsonProperty("puntuacion") final int puntuacion,
			@JsonProperty("activo") final boolean activo,
			@JsonProperty("imagenes") final ArrayList<String> imagenes,
			@JsonProperty("suscriptor") final Suscriptor suscriptor) {
		super(id, nombre, descripcion, precio, puntuacion, activo, imagenes);
		this.suscriptor = suscriptor;
	}

	//ENCAPSULACION
	@JsonProperty("suscriptor")
	public Suscriptor getSuscriptor() {
		return suscriptor;
	}
	
	
}
