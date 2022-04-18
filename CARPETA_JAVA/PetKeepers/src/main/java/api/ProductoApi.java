package api;

//CLASES
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
//DEPENDENCIAS
//OBJETOS
import model.Producto;
import service.ServiceProducto;
//ECEPCIONES
import java.sql.SQLException;
//ENDPOINTS
@Path("/producto")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class ProductoApi {
	private ServiceProducto service;

	public ProductoApi() {
		service = new ServiceProducto();
	}
	
	@GET
	@Path("/")
	public Response getProductos() throws SQLException, ClassNotFoundException {
		service = new ServiceProducto();
		return Response.ok(service.getProductos(), MediaType.APPLICATION_JSON).build();
	}

}
