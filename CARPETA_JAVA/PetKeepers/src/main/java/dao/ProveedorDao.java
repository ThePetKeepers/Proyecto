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
import model.Proveedor;
//ECEPCIONES
import java.sql.SQLException;

public class ProveedorDao {
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

	public ArrayList<Proveedor> getProveedores() throws SQLException, ClassNotFoundException {
		ArrayList<Proveedor> proveedores = new ArrayList<>();

		String select = ConstantsApi.GET_PROVEEDORES;

		Statement st = bbddConnection.createStatement();
		ResultSet rs = st.executeQuery(select);

		while (rs.next()) {

			Proveedor proveedorObtenido = new Proveedor(
					rs.getInt("id"), 
					rs.getString("nombre"),
					rs.getString("cif"), 
					rs.getString("email"),
					rs.getString("telefono"),
					rs.getString("ciudad"), 
					rs.getString("direccion")
			);
			proveedores.add(proveedorObtenido);

		}

		return proveedores;
	}
	
	public Proveedor getProveedor(int id) throws SQLException, ClassNotFoundException {
		Proveedor proveedorObtenido = new Proveedor();

		PreparedStatement ps = bbddConnection.prepareStatement(ConstantsApi.GET_PROVEEDOR_BY_ID);
		ps.setInt(1, id);
		ResultSet rs = ps.executeQuery();

		while (rs.next()) {
			proveedorObtenido = new Proveedor(
					rs.getInt("id"), 
					rs.getString("nombre"),
					rs.getString("cif"), 
					rs.getString("email"),
					rs.getString("telefono"),
					rs.getString("ciudad"), 
					rs.getString("direccion")
			);
		}

		return proveedorObtenido;
	}
}
