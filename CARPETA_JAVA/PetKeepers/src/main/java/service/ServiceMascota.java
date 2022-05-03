package service;

import java.sql.SQLException;
import java.util.ArrayList;

import dao.MascotaDao;
import model.Mascota;

public class ServiceMascota {
	private MascotaDao Dao;

	public Mascota getMascota(int id) throws SQLException, ClassNotFoundException {
		Dao = new MascotaDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		Mascota mascota = Dao.getMascota(id);
		Dao.disconnect();

		return mascota;
	}
	
	public ArrayList<Mascota> getMascotas() throws SQLException, ClassNotFoundException {
		Dao = new MascotaDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		ArrayList<Mascota> mascotas = Dao.getMascotas();
		Dao.disconnect();

		return mascotas;
	}
	
	public void postMascota(Mascota mascota) throws SQLException, NullPointerException, ClassNotFoundException {
		Dao = new MascotaDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		Dao.postMascota(mascota);
		Dao.disconnect();
	}
	
	public void updateMascota(int id, Mascota mascota) throws SQLException, NullPointerException, ClassNotFoundException {
		Dao = new MascotaDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		Dao.updateMascota(id, mascota);
		Dao.disconnect();
	}
	
	public void deleteMascota(int id) throws SQLException, NullPointerException, ClassNotFoundException {
		Dao = new MascotaDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		Dao.deleteMascota(id);;
		Dao.disconnect();
	}
}
