package config;

public class ConstantsApi {
	public static final String CONNECTION = "jdbc:mysql://localhost:3306/" + "petkeepers" + "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
	public static final String USER_CONNECTION = "root";
	public static final String PASS_CONNECTION = "12341234";

	// SUSCRIPTOR
	public static final String GET_SUSCRIPTORES = "SELECT * FROM petkeepers.suscriptor";

	// SUSCRIPCION
	public static final String GET_SUSCRIPCIONES = "SELECT * FROM petkeepers.suscripcion";
	public static final String GET_SUSCRIPCION_BY_ID = "SELECT * FROM petkeepers.suscripcion WHERE id = ?";
	public static final String POST_SUSCRIPCION = "INSERT INTO petkeepers.suscripcion (tiempo, precio, descripcion) VALUES (?,?,?)";
	public static final String UPDATE_SUSCRIPCION = "UPDATE petkeepers.suscripcion SET tiempo = ?, precio = ?, descripcion = ? WHERE (id = ?)";
	public static final String DELETE_SUSCRIPCION = "DELETE FROM petkeepers.suscripcion WHERE (id = ?)";
	
	// PROVEEDOR
	public static final String GET_PROVEEDORES = "SELECT * FROM petkeepers.proveedor";
	public static final String GET_PROVEEDOR_BY_ID = "SELECT * FROM petkeepers.proveedor WHERE id = ?";
	public static final String POST_PROVEEDOR = "INSERT INTO petkeepers.proveedor (nombre, cif, email, telefono, ciudad, direccion) VALUES (?,?,?,?,?,?)";
	public static final String UPDATE_PROVEEDOR = "UPDATE petkeepers.proveedor SET nombre = ?, cif = ?, email = ?, telefono = ?, ciudad = ?, direccion = ? WHERE (id = ?)";
	public static final String DELETE_PROVEEDOR = "DELETE FROM petkeepers.proveedor WHERE (id = ?)";
	
	// PRODUCTO
	public static final String GET_PRODUCTOS = "SELECT * FROM petkeepers.producto";
	public static final String GET_PRODUCTO_BY_ID = "SELECT * FROM petkeepers.producto WHERE id = ?";
	public static final String POST_PRODUCTO = "INSERT INTO petkeepers.producto (nombre, descripcion, precio, puntuacion, activo, imagenes, id_proveedor) VALUES (?,?,?,?,?,?,?)";
	public static final String UPDATE_PRODUCTO = "UPDATE petkeepers.producto SET nombre = ?, descripcion = ?, precio = ?, puntuacion = ?, activo = ?, imagenes = ?, id_proveedor = ? WHERE (id = ?)";
	public static final String DELETE_PRODUCTO = "DELETE FROM petkeepers.producto WHERE (id = ?)";

}
