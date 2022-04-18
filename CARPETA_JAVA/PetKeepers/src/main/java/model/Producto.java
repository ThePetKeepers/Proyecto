package model;

//CLASES
import java.util.ArrayList;
//DEPENDENCIAS
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
//OBJETOS

public class Producto extends Objeto {
	//ATRIBUTOS
	@JsonProperty("proveedor")
	private Proveedor proveedor;

	//CONSTRUCTORES
	@JsonCreator
	public Producto(
			@JsonProperty("id") final int id,
			@JsonProperty("nombre") final String nombre,
			@JsonProperty("descripcion") final String descripcion,
			@JsonProperty("precio") final String precio,
			@JsonProperty("puntuacion") final int puntuacion,
			@JsonProperty("activo") final boolean activo,
			@JsonProperty("imagenes") final ArrayList<String> imagenes,
			@JsonProperty("proveedor") final Proveedor proveedor) {
		super(id, nombre, descripcion, precio, puntuacion, activo, imagenes);
		this.proveedor = proveedor;
	}

	//ENCAPSULACION
	@JsonProperty("proveedor")
	public Proveedor getProveedor() {
		return proveedor;
	}
}
