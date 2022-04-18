package service;

//CLASES
import java.util.ArrayList;
//DEPENDENCIAS
//OBJETOS
import model.Suscripcion;
import dao.SuscripcionDao;
//ECEPCIONES
import java.sql.SQLException;

public class ServiceSuscripcion {
	private SuscripcionDao Dao;

	public ArrayList<Suscripcion> getSuscripciones() throws SQLException, ClassNotFoundException {
		Dao = new SuscripcionDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		ArrayList<Suscripcion> suscripciones = Dao.getSuscripciones();
		Dao.disconnect();

		return suscripciones;
	}
}
