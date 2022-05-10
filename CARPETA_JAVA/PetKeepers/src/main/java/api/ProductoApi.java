package api;

//CLASES
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
//DEPENDENCIAS
//OBJETOS
import model.Producto;
import model.Proveedor;
import service.ServiceProducto;
import service.ServiceProveedor;

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
	
	@GET
	@Path("{id}")
	public Response getProducto(@PathParam("id") int id) throws SQLException, ClassNotFoundException, org.json.JSONException {
		service = new ServiceProducto();
		return Response.ok(service.getProducto(id), MediaType.APPLICATION_JSON).build();
	}
	
	@POST
	@Path("/")
	public Response postProducto(Producto producto) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceProducto();
		service.postProducto(producto);
		return Response.ok("Se ha creado un nuevo producto", MediaType.APPLICATION_JSON).build();
	}
	
	@POST
	@Path("{id}")
	public Response postProducto(Producto producto, @PathParam("id") int id) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceProducto();
		service.updateProducto(id, producto);
		return Response.ok("Se ha actualizado producto", MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	public Response deleteProducto(@PathParam("id") int id) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceProducto();
		service.deleteProducto(id);
		return Response.ok("Se ha eliminado el producto", MediaType.APPLICATION_JSON).build();
	}

}
