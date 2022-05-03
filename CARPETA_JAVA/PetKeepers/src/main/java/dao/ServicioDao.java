package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import config.ConstantsApi;
import model.Servicio;
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

	public ArrayList<Integer> getServiciosByClient(int id) throws SQLException, ClassNotFoundException {
		ArrayList<Integer> servicios = new ArrayList<>();
		
		PreparedStatement ps = bbddConnection.prepareStatement(ConstantsApi.GET_SERVICIOS_BY_CLIENT_ID);
		ps.setInt(1, id);
		ResultSet rs = ps.executeQuery();

		while (rs.next()) {
			int servicioObtenido = rs.getInt("id");
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
			servicioObtenido = new Servicio(
					rs.getInt("id"), 
					rs.getString("nombre"),
					rs.getString("descripcion"), 
					rs.getDouble("precio"),
					rs.getDouble("puntuacion"),
					rs.getBoolean("activo"), 
					MyFunctions.stringToArrayList(rs.getString("imagenes")), 
					rs.getInt("id_suscriptor")
			);
		}

		return servicioObtenido;
	}
	
	public ArrayList<Servicio> getServicios() throws SQLException, ClassNotFoundException {
		ArrayList<Servicio> servicios = new ArrayList<>();

		String select = ConstantsApi.GET_SERVICIOS;

		Statement st = bbddConnection.createStatement();
		ResultSet rs = st.executeQuery(select);
				
		while (rs.next()) {
			Servicio servicioObtenido = new Servicio(
					rs.getInt("id"), 
					rs.getString("nombre"),
					rs.getString("descripcion"), 
					rs.getDouble("precio"),
					rs.getDouble("puntuacion"),
					rs.getBoolean("activo"), 
					MyFunctions.stringToArrayList(rs.getString("imagenes")), 
					rs.getInt("id_suscriptor")
			);
			servicios.add(servicioObtenido);
		}

		return servicios;
	}

	public void postServicio(Servicio servicio) throws SQLException, NullPointerException {
		PreparedStatement ps = bbddConnection.prepareStatement(ConstantsApi.POST_SERVICIO);

		ps.setString(1, servicio.getNombre());
		ps.setString(2, servicio.getDescripcion());
		ps.setDouble(3, servicio.getPrecio());
		ps.setDouble(4, servicio.getPuntuacion());
		ps.setBoolean(5, servicio.isActivo());
		ps.setString(6, MyFunctions.arrayListToString(servicio.getImagenes()));
		ps.setInt(7, servicio.getSuscriptor());

		ps.execute();
		ps.close();
	}
	
	public void updateServicio(int id, Servicio servicio) throws SQLException, NullPointerException {
		PreparedStatement ps =  bbddConnection.prepareStatement(ConstantsApi.UPDATE_SERVICIO);

		ps.setString(1, servicio.getNombre());
		ps.setString(2, servicio.getDescripcion());
		ps.setDouble(3, servicio.getPrecio());
		ps.setDouble(4, servicio.getPuntuacion());
		ps.setBoolean(5, servicio.isActivo());
		ps.setString(6, MyFunctions.arrayListToString(servicio.getImagenes()));
		ps.setInt(7, servicio.getSuscriptor());
		ps.setInt(8, id);

		ps.execute(); 
		ps.close();
	}
	
	public void deleteServicio(int id) throws SQLException, NullPointerException, ClassNotFoundException {
		PreparedStatement ps = bbddConnection.prepareStatement(ConstantsApi.DELETE_SERVICIO);

		ps.setInt(1, id);
		ps.execute();
		ps.close();
	}
}
