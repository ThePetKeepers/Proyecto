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
import java.util.Arrays;
//DEPENDENCIAS
//OBJETOS
import config.ConstantsApi;
import model.Producto;
//ECEPCIONES
import java.sql.SQLException;

public class ProductoDao {
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

	public ArrayList<Producto> getProveedores() throws SQLException, ClassNotFoundException {
		ArrayList<Producto> productos = new ArrayList<>();

		String select = ConstantsApi.GET_PRODUCTOS;

		Statement st = bbddConnection.createStatement();
		ResultSet rs = st.executeQuery(select);

		while (rs.next()) {
			ProveedorDao daoProveedor = new ProveedorDao();
			daoProveedor.connect();
			
			//String[] imagenes = new String[rs.getArray("imagenes")];
		    ArrayList<String> imagenes = new ArrayList<>();
		    //imagenes = Arrays.asList(rs.getArray("imagenes"));
			Producto proveedorObtenido = new Producto(
					rs.getInt("id"), 
					rs.getString("nombre"),
					rs.getString("descripcion"), 
					rs.getString("precio"),
					rs.getInt("puntuacion"),
					rs.getBoolean("activo"), 
					imagenes,
					daoProveedor.getProveedor(rs.getInt("id_proveedor"))
			);
			productos.add(proveedorObtenido);

		}

		return productos;
	}
}
