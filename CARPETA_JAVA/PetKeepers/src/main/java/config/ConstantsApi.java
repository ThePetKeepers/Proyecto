package config;

public class ConstantsApi {
	public static final String CONNECTION = "jdbc:mysql://localhost:3306/" + "petkeepers"
			+ "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&useISSL=false";
	public static final String USER_CONNECTION = "root";
	public static final String PASS_CONNECTION = "12341234";

	// TABLAS INTERMEDIAS
	public static final String GET_SERVICIOS_BY_CLIENT_ID = "SELECT id_servicio FROM petkeepers.adquirir_servicio WHERE id_cliente = ?";
	public static final String GET_MASCOTAS_BY_CLIENT_ID = "SELECT id_mascota FROM petkeepers.adquirir_mascota WHERE id_cliente = ?";

	// SERVICIO
	public static final String GET_SERVICIOS = "SELECT * FROM petkeepers.servicio";
	public static final String GET_SERVICIO = "SELECT * FROM petkeepers.servicio WHERE id = ?";

	// SUSCRIPTOR
	public static final String GET_SUSCRIPTORES = "SELECT * FROM petkeepers.suscriptor";
	public static final String GET_SUSCRIPTOR = "SELECT * FROM petkeepers.suscriptor WHERE id = ?";
	public static final String POST_SUSCRIPTOR = "INSERT INTO petkeepers.suscriptor (nombre, primer_apellido, segundo_apellido, email, dni, nacimiento, telefono, ciudad, direccion, foto, password, tipo_usuario, metodo_de_pago, id_suscripcion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	public static final String UPDATE_SUSCRIPTOR = "UPDATE petkeepers.suscriptor SET nombre = ?, primer_apellido = ?, segundo_apellido = ?, email = ?, dni = ?, nacimiento = ?, telefono = ?, ciudad = ?, direccion = ?, foto = ?, password = ?, tipo_usuario = ?, metodo_de_pago = ?, id_suscripcion = ? WHERE (id = ?)";
	public static final String DELETE_SUSCRIPTOR = "DELETE FROM petkeepers.suscriptor WHERE (id = ?)";

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

	// PAGO
	public static final String GET_PAGOS = "SELECT * FROM petkeepers.metodo_de_pago";
	public static final String GET_PAGO_BY_ID = "SELECT * FROM petkeepers.metodo_de_pago WHERE id = ?";
	public static final String POST_PAGO = "INSERT INTO petkeepers.metodo_de_pago (tipo) VALUES (?)";
	public static final String UPDATE_PAGO = "UPDATE petkeepers.metodo_de_pago SET tipo = ? WHERE (id = ?)";
	public static final String DELETE_PAGO = "DELETE FROM petkeepers.metodo_de_pago WHERE (id = ?)";
}