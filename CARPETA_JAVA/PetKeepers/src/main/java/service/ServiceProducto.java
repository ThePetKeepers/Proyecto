package service;

//CLASES
import java.util.ArrayList;
//DEPENDENCIAS
//OBJETOS
import model.Producto;
import dao.ProductoDao;
//ECEPCIONES
import java.sql.SQLException;

public class ServiceProducto {
	private ProductoDao Dao;

	public ArrayList<Producto> getProductos() throws SQLException, ClassNotFoundException {
		Dao = new ProductoDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		ArrayList<Producto> productos = Dao.getProveedores();
		Dao.disconnect();

		return productos;
	}

}
