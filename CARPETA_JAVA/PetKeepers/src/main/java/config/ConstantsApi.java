package config;

public class ConstantsApi {
	public static final String CONNECTION = "jdbc:mysql://localhost:3306/petkeepers?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
	public static final String USER_CONNECTION = "root";
	public static final String PASS_CONNECTION = "12341234";

	// SUSCRIPTOR
	public static final String GET_SUSCRIPTORES = "SELECT * FROM petkeepers.suscriptor";

	// SUSCRIPCION
	public static final String GET_SUSCRIPCIONES = "SELECT * FROM petkeepers.suscripcion";

	// PROVEEDOR
	public static final String GET_PROVEEDORES = "SELECT * FROM petkeepers.proveedor";
	public static final String GET_PROVEEDOR_BY_ID = "SELECT * FROM petkeepers.proveedor WHERE id = ?";


	// PRODUCTO
	public static final String GET_PRODUCTOS = "SELECT * FROM petkeepers.producto";

}
