package service;

import java.sql.SQLException;
import dao.TokenDao;

public class ServiceToken {
	private TokenDao Dao;

	public String crearToken(int id) throws SQLException, ClassNotFoundException {
		Dao = new TokenDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		String token = Dao.crearToken(id);
		Dao.disconnect();

		return token;
	}
	
	public Boolean verificarToken(String token) throws SQLException, ClassNotFoundException {
		Dao = new TokenDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		boolean resultado = Dao.verificarToken(token);
		Dao.disconnect();

		return resultado;
	}
	
	public int obtenerUsuarioByToken(String token) throws SQLException, ClassNotFoundException {
	
		Dao = new TokenDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		int usuario = Dao.obtenerUsuarioByToken(token);
		Dao.disconnect();

		return usuario;
	}
}
