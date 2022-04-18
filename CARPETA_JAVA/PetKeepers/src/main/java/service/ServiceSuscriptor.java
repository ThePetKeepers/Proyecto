package service;

//CLASES
import java.util.ArrayList;
//DEPENDENCIAS
//OBJETOS
import model.Suscriptor;
import dao.SuscriptorDao;
//ECEPCIONES
import java.sql.SQLException;

public class ServiceSuscriptor {
	private SuscriptorDao Dao;

	public ArrayList<Suscriptor> getSuscriptores() throws SQLException, ClassNotFoundException {
		Dao = new SuscriptorDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		ArrayList<Suscriptor> suscriptores = Dao.getSuscriptores();
		Dao.disconnect();

		return suscriptores;
	}
}
