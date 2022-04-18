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
import model.Suscripcion;
import service.ServiceSuscripcion;
//ECEPCIONES
import java.sql.SQLException;
//ENDPOINTS
@Path("/suscripcion")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class SuscripcionApi {
	private ServiceSuscripcion service;

	public SuscripcionApi() {
		service = new ServiceSuscripcion();
	}
	
	@GET
	@Path("/")
	public Response getSuscripciones() throws SQLException, ClassNotFoundException {
		service = new ServiceSuscripcion();
		return Response.ok(service.getSuscripciones(), MediaType.APPLICATION_JSON).build();
	}
}
