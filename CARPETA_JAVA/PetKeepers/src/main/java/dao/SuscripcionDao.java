package dao;

//CLASES
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
//DEPENDENCIAS
//OBJETOS
import config.ConstantsApi;
import model.Suscripcion;
//ECEPCIONES
import java.sql.SQLException;

public class SuscripcionDao {
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

	public ArrayList<Suscripcion> getSuscripciones() throws SQLException, ClassNotFoundException {
		ArrayList<Suscripcion> suscripciones = new ArrayList<>();

		String select = ConstantsApi.GET_SUSCRIPCIONES;

		Statement st = bbddConnection.createStatement();
		ResultSet rs = st.executeQuery(select);

		while (rs.next()) {

			Suscripcion suscripcionObtenida = new Suscripcion(
					rs.getInt("id"), 
					rs.getString("tiempo"),
					rs.getString("precio"), 
					rs.getString("descripcion")
			);
			suscripciones.add(suscripcionObtenida);

		}

		return suscripciones;
	}
}
