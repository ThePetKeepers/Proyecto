package service;

import java.sql.SQLException;
import java.util.ArrayList;

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
}
