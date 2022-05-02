package dao;

//CLASES
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
//DEPENDENCIAS
//OBJETOS
import config.ConstantsApi;
import externalLibrary.MyFunctions;
import model.Mascota;
import model.Pago;
import model.Producto;
import model.Servicio;
import model.Suscripcion;
import model.Suscriptor;
import model.Servicio;
//ECEPCIONES
import java.sql.SQLException;

public class SuscriptorDao {
	private Connection bbddConnection;

	public void connect() throws SQLException, ClassNotFoundException {
		bbddConnection = DriverManager.getConnection(
				ConstantsApi.CONNECTION, 
				ConstantsApi.USER_CONNECTION,
				ConstantsApi.PASS_CONNECTION
		);
	}

	public void disconnect() throws SQLException {
		if (bbddConnection != null) {
			bbddConnection.close();
		}
	}
	
	public ArrayList<Suscriptor> getSuscriptores() throws SQLException, ClassNotFoundException {
			ArrayList<Suscriptor> suscriptores = new ArrayList<>();

			String select = ConstantsApi.GET_SUSCRIPTORES;

			Statement st = bbddConnection.createStatement();
			ResultSet rs = st.executeQuery(select);

			while (rs.next()) {
				MascotaDao daoMascota = new MascotaDao();
				daoMascota.connect();
				ArrayList<Mascota> mascotas = daoMascota.getMascotasByClient(rs.getInt("id_cliente"));
				daoMascota.disconnect();
				
				ServicioDao daoServicio = new ServicioDao();
				daoServicio.connect();
				ArrayList<Servicio> servicios = daoServicio.getServiciosByClient(rs.getInt("id_cliente"));
				daoServicio.disconnect();
				
				PagoDao daoPago = new PagoDao();
				daoPago.connect();
				Pago pago = daoPago.getPago(rs.getInt("metodo_de_pago"));
				daoPago.disconnect();
				
				SuscripcionDao daoSuscripcion = new SuscripcionDao();
				daoSuscripcion.connect();
				Suscripcion suscripcion = daoSuscripcion.getSuscripcion(rs.getInt("id_suscripcion"));
				daoSuscripcion.disconnect();

				
				Suscriptor suscriptorObtenido = new Suscriptor(
						rs.getInt("id"),
						rs.getString("nombre"),
						rs.getString("primer_apellido"),
						rs.getString("segundo_apellido"),
						rs.getString("email"),
						rs.getString("password"),
						rs.getString("dni"),
						rs.getString("nacimiento"),
						rs.getString("telefono"),
						rs.getString("ciudad"),
						rs.getString("direccion"),
						rs.getString("foto"),
						mascotas,
						rs.getInt("tipo_usuario"),
						rs.getInt("id_cliente"),
						pago,
						suscripcion,
						servicios);
				suscriptores.add(suscriptorObtenido);

			}

			return suscriptores;
		}
	
	public Suscriptor getSuscriptor(int id) throws SQLException, ClassNotFoundException {
		Suscriptor suscriptorObtenido = new Suscriptor();
		return suscriptorObtenido;

	}
}
