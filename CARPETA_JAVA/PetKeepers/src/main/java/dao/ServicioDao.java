package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import config.ConstantsApi;
import model.Proveedor;
import model.Servicio;
import model.Suscripcion;
import externalLibrary.MyFunctions;

public class ServicioDao {
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

	public ArrayList<Servicio> getServiciosByClient(int id) throws SQLException, ClassNotFoundException {
		ArrayList<Servicio> servicios = new ArrayList<>();
		
		PreparedStatement ps = bbddConnection.prepareStatement(ConstantsApi.GET_SERVICIOS_BY_CLIENT_ID);
		ps.setInt(1, id);
		ResultSet rs = ps.executeQuery();

		while (rs.next()) {
			Servicio servicioObtenido = getServicio(rs.getInt("id_servicio"));
			servicios.add(servicioObtenido);
		}
		
		return servicios;
	}
	
	public Servicio getServicio(int id) throws SQLException, ClassNotFoundException {
		Servicio servicioObtenido = new Servicio();

		PreparedStatement ps = bbddConnection.prepareStatement(ConstantsApi.GET_SERVICIO);
		ps.setInt(1, id);
		ResultSet rs = ps.executeQuery();
				
		while (rs.next()) {
			SuscriptorDao daoSuscriptor = new SuscriptorDao();
			daoSuscriptor.connect();

			servicioObtenido = new Servicio(
					rs.getInt("id"), 
					rs.getString("nombre"),
					rs.getString("descripcion"), 
					rs.getDouble("precio"),
					rs.getDouble("puntuacion"),
					rs.getBoolean("activo"), 
					MyFunctions.stringToArrayList(rs.getString("imagenes")), 
					daoSuscriptor.getSuscriptor(rs.getInt("id_suscriptor"))
			);
			daoSuscriptor.disconnect();

		}

		return servicioObtenido;
	}
}
