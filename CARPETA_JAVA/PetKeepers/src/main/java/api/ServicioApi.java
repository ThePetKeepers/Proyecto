package api;

//CLASES
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
//DEPENDENCIAS
//OBJETOS
import service.ServiceServicio;
import model.Servicio;
//ECEPCIONES
import java.sql.SQLException;
//ENDPOINTS
@Path("/servicio")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class ServicioApi {
	private ServiceServicio service;

	public ServicioApi() {
		service = new ServiceServicio();
	}
	
	@GET
	@Path("/")
	public Response getServicios() throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceServicio();
		return Response.ok(service.getServicios(), MediaType.APPLICATION_JSON).build();
	}
	
	@GET
	@Path("{id}")
	public Response getServicio(@PathParam("id") int id) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceServicio();
		return Response.ok(service.getServicio(id), MediaType.APPLICATION_JSON).build();
	}
	
	@POST
	@Path("/")
	public Response postServicio(Servicio Servicio) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceServicio();
		service.postServicio(Servicio);
		return Response.ok("Se ha creado un nuevo Servicio", MediaType.APPLICATION_JSON).build();
	}
	
	@POST
	@Path("{id}")
	public Response postServicio(Servicio Servicio, @PathParam("id") int id) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceServicio();
		service.updateServicio(id, Servicio);
		return Response.ok("Se ha actualizado Servicio", MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	public Response deleteServicio(@PathParam("id") int id) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceServicio();
		service.deleteServicio(id);
		return Response.ok("Se ha eliminado el Servicio", MediaType.APPLICATION_JSON).build();
	}
}
