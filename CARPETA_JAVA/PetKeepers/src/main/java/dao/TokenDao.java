package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;

import config.ConstantsApi;
import model.Usuario;

public class TokenDao {
	private Connection bbddConnection;

	public void connect() throws SQLException, ClassNotFoundException {
		bbddConnection = DriverManager.getConnection(ConstantsApi.CONNECTION, ConstantsApi.USER_CONNECTION,
				ConstantsApi.PASS_CONNECTION);
	}

	public void disconnect() throws SQLException {
		if (bbddConnection != null) {
			bbddConnection.close();
		}
	}

	public String crearToken(int id) throws SQLException, ClassNotFoundException {
		// Establecemos la clave secreta
		String key = "password";

		// Generamos el algotirmo
		Algorithm alg = Algorithm.HMAC256(key);

		// Generamos el token a partir del id
		String token = JWT.create().withIssuer("Petkeepers") // EMISOR DE TOKEN
				.withSubject(String.valueOf(id)) // ID
				.sign(alg);

		return token;
	}

	public boolean verificarToken(String token) throws SQLException, ClassNotFoundException {

		// Establecemos la clave secreta
		String key = "password";

		// Generamos el algotirmo
		Algorithm alg = Algorithm.HMAC256(key);

		JWTVerifier verifier = JWT.require(alg).withIssuer("Petkeepers").build();
		try {
			verifier.verify(token);
			return true;
		} catch (JWTVerificationException e) {
			e.printStackTrace();
		}

		return false;
	}
}
