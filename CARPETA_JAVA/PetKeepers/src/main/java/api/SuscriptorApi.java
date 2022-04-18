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
import model.Suscriptor;
import service.ServiceSuscriptor;
//ECEPCIONES
import java.sql.SQLException;
//ENDPOINTS
@Path("/suscriptor")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class SuscriptorApi {
	private ServiceSuscriptor service;

	public SuscriptorApi() {
		service = new ServiceSuscriptor();
	}
	
	@GET
	@Path("/")
	public Response getSuscriptores() throws SQLException, ClassNotFoundException {
		service = new ServiceSuscriptor();
		return Response.ok(service.getSuscriptores(), MediaType.APPLICATION_JSON).build();
	}
}
