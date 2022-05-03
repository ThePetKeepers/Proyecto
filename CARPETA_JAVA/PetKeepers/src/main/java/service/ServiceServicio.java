package service;

import java.sql.SQLException;
import java.util.ArrayList;

import dao.ServicioDao;
import dao.ServicioDao;
import model.Servicio;

public class ServiceServicio {
	private ServicioDao Dao;

	public Servicio getServicio(int id) throws SQLException, ClassNotFoundException {
		Dao = new ServicioDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		Servicio servicio = Dao.getServicio(id);
		Dao.disconnect();

		return servicio;
	}
	
	public ArrayList<Servicio> getServicios() throws SQLException, ClassNotFoundException {
		Dao = new ServicioDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		ArrayList<Servicio> servicios = Dao.getServicios();
		Dao.disconnect();

		return servicios;
	}
	
	public void postServicio(Servicio servicio) throws SQLException, NullPointerException, ClassNotFoundException {
		Dao = new ServicioDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		Dao.postServicio(servicio);
		Dao.disconnect();
	}
	
	public void updateServicio(int id, Servicio servicio) throws SQLException, NullPointerException, ClassNotFoundException {
		Dao = new ServicioDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		Dao.updateServicio(id, servicio);
		Dao.disconnect();
	}
	
	public void deleteServicio(int id) throws SQLException, NullPointerException, ClassNotFoundException {
		Dao = new ServicioDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		Dao.deleteServicio(id);;
		Dao.disconnect();
	}
}
