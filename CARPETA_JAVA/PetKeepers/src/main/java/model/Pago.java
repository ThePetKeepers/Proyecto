package model;

//CLASES
//DEPENDENCIAS
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
//OBJETOS

public class Pago {
	//ATRIBUTOS
	@JsonProperty("id")
	private int id;

	@JsonProperty("tipo")
	private String nombre;

	//CONSTRUCTORES
	@JsonCreator
	public Pago(
			@JsonProperty("id") final int id,
			@JsonProperty("tipo") final String nombre) {
		this.id = id;
		this.nombre = nombre;
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

	@JsonProperty("tipo")
	public String getNombre() {
		return nombre;
	}
	
}
