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
import service.ServiceMascota;
import model.Mascota;
//ECEPCIONES
import java.sql.SQLException;
//ENDPOINTS
@Path("/mascota")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class MascotaApi {
	private ServiceMascota service;
	
	public MascotaApi() {
		service = new ServiceMascota();
	}
	
	@GET
	@Path("/")
	public Response getMascotas() throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceMascota();
		return Response.ok(service.getMascotas(), MediaType.APPLICATION_JSON).build();
	}
	
	@GET
	@Path("{id}")
	public Response getMascota(@PathParam("id") int id) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceMascota();
		return Response.ok(service.getMascota(id), MediaType.APPLICATION_JSON).build();
	}
	
	@POST
	@Path("/")
	public Response postMascota(Mascota mascota) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceMascota();
		service.postMascota(mascota);
		return Response.ok("Se ha creado un nuevo Mascota", MediaType.APPLICATION_JSON).build();
	}
	
	@POST
	@Path("{id}")
	public Response postMascota(Mascota mascota, @PathParam("id") int id) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceMascota();
		service.updateMascota(id, mascota);
		return Response.ok("Se ha actualizado Mascota", MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	public Response deleteMascota(@PathParam("id") int id) throws ClassNotFoundException, SQLException, NullPointerException {
		service = new ServiceMascota();
		service.deleteMascota(id);
		return Response.ok("Se ha eliminado el Mascota", MediaType.APPLICATION_JSON).build();
	}
}