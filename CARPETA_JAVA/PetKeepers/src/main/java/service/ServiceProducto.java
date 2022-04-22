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
		System.out.println("Antes de conectar");

		Dao = new ProductoDao();
		try {
			Dao.connect();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		ArrayList<Producto> productos = Dao.getProductos();
		Dao.disconnect();
		
		System.out.println("Despues de conectar");

		return productos;
	}

}
