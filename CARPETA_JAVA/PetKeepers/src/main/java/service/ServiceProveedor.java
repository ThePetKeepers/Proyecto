package service;

//CLASES
import java.util.ArrayList;
//DEPENDENCIAS
//OBJETOS
import model.Proveedor;
import dao.ProveedorDao;
//ECEPCIONES
import java.sql.SQLException;

public class ServiceProveedor {
	private ProveedorDao Dao;

	public ArrayList<Proveedor> getProveedores() throws SQLException, ClassNotFoundException {
		Dao = new ProveedorDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		ArrayList<Proveedor> proveedores = Dao.getProveedores();
		Dao.disconnect();

		return proveedores;
	}

	public Proveedor getProveedor(int id) throws SQLException, ClassNotFoundException {
		Dao = new ProveedorDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		Proveedor proveedor = Dao.getProveedor(id);
		Dao.disconnect();

		return proveedor;
	}
}
