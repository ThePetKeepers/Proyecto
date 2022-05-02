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
import service.ServiceSuscripcion;

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
	@Path("{id}")
	public Response getServicio(@PathParam("id") int id) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceServicio();
		return Response.ok(service.getServicio(id), MediaType.APPLICATION_JSON).build();
	}
}
