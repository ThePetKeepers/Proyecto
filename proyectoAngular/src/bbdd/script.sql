USE petkeepers; 
DROP TABLE comentar_producto;
DROP TABLE adquirir_producto;
DROP TABLE comentar_servicio;
DROP TABLE adquirir_servicio;
DROP TABLE producto;
DROP TABLE proveedor;
DROP TABLE cliente;
DROP TABLE servicio;
DROP TABLE suscriptor;
DROP TABLE metodo_de_pago;
DROP TABLE suscripcion;
DROP DATABASE petkeepers;

CREATE DATABASE petkeepers;
USE petkeepers;

CREATE TABLE suscripcion(
id INT PRIMARY KEY AUTO_INCREMENT,
tiempo VARCHAR(255),
precio double,
descripcion VARCHAR(255));

CREATE TABLE metodo_de_pago(
tipo VARCHAR(255) PRIMARY KEY);

CREATE TABLE tipo_usuario(
tipo VARCHAR(255) PRIMARY KEY);

CREATE TABLE suscriptor(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
primer_apellido VARCHAR(255),
segundo_apellido VARCHAR(255),
email VARCHAR(255),
dni char(9),
nacimiento DATE,
telefono CHAR(9),
pais VARCHAR(255),
ciudad VARCHAR(255),
direccion VARCHAR(255),
foto VARCHAR(255),
password VARCHAR(255),
tipo_usuario VARCHAR(255) NOT NULL,
metodo_de_pago VARCHAR(255) NOT NULL,
id_suscripcion INT NOT NULL,
FOREIGN KEY (tipo_usuario) 
	REFERENCES tipo_usuario (tipo) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (metodo_de_pago) 
	REFERENCES metodo_de_pago (tipo) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (id_suscripcion) 
	REFERENCES suscripcion (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE servicio(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
descripcion TEXT,
precio VARCHAR(255),
puntuacion DOUBLE,
activo BOOLEAN,
imagenes JSON,
id_suscriptor INT NOT NULL,
FOREIGN KEY (id_suscriptor) 
	REFERENCES suscriptor (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE cliente(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
primer_apellido VARCHAR(255),
segundo_apellido VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255),
dni char(9),
nacimiento DATE,
telefono CHAR(9),
pais VARCHAR(255),
ciudad VARCHAR(255),
direccion VARCHAR(255),
foto VARCHAR(255));

CREATE TABLE mascota(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
nombre_mascota VARCHAR(255),
descripcion TEXT,
precio VARCHAR(255),
puntuacion DOUBLE,
activo BOOLEAN,
imagenes JSON,
id_cliente INT NOT NULL,
FOREIGN KEY (id_cliente) 
	REFERENCES cliente (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE proveedor(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
cif char(9),
email VARCHAR(255),
telefono CHAR(9),
pais VARCHAR(255),
ciudad VARCHAR(255),
direccion VARCHAR(255));

CREATE TABLE producto(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
descripcion TEXT,
precio DOUBLE,
puntuacion DOUBLE,
activo BOOLEAN,
imagenes JSON,
id_proveedor INT NOT NULL,
FOREIGN KEY (id_proveedor) 
	REFERENCES proveedor (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE adquirir_servicio(
id_servicio INT NOT NULL,
id_cliente INT NOT NULL,
FOREIGN KEY (id_servicio) 
	REFERENCES servicio (id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (id_cliente) 
	REFERENCES cliente (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);
    
CREATE TABLE comentar_servicio(
id INT AUTO_INCREMENT,
comentario TEXT,
id_servicio INT NOT NULL,
id_cliente INT NOT NULL,
fecha DATETIME,
PRIMARY KEY (id, id_servicio, id_cliente),
FOREIGN KEY (id_servicio) 
	REFERENCES servicio (id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (id_cliente) 
	REFERENCES cliente (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE adquirir_producto(
id_producto INT NOT NULL,
id_cliente INT NOT NULL,
FOREIGN KEY (id_producto) 
	REFERENCES producto (id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (id_cliente) 
	REFERENCES cliente (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);
    
CREATE TABLE comentar_producto(
id INT AUTO_INCREMENT,
comentario TEXT,
id_producto INT NOT NULL,
id_cliente INT NOT NULL,
fecha DATETIME,
PRIMARY KEY (id, id_producto, id_cliente),
FOREIGN KEY (id_producto) 
	REFERENCES producto (id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (id_cliente) 
	REFERENCES cliente (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);
    
CREATE TABLE adquirir_mascota(
id_mascota INT NOT NULL,
id_suscriptor INT NOT NULL,
FOREIGN KEY (id_mascota) 
	REFERENCES mascota (id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (id_suscriptor) 
	REFERENCES suscriptor (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);
    
CREATE TABLE comentar_mascota(
id INT AUTO_INCREMENT,
comentario TEXT,
id_mascota INT NOT NULL,
id_suscriptor INT NOT NULL,
fecha DATETIME,
PRIMARY KEY (id, id_mascota, id_suscriptor),
FOREIGN KEY (id_mascota) 
	REFERENCES mascota (id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (id_suscriptor) 
	REFERENCES suscriptor (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);

INSERT INTO suscripcion
(tiempo, precio, descripcion)
VALUES
("1 mes", 9.99, "Suscripcion inicial"),
("6 meses", 39.99, "Te gustan muchos los perros"),
("12 meses", 59.99, "Amas mas a los animales que a las personas");

INSERT INTO metodo_de_pago
(tipo)
VALUES
("tarjeta"),
("paypal");

INSERT INTO tipo_usuario
(tipo)
VALUES
("ADMIN"),
("CLIENTE");

-- SUSCRIPTORES:
INSERT INTO suscriptor
(nombre, email, dni, nacimiento, telefono, pais, ciudad, direccion, password, tipo_usuario, metodo_de_pago, id_suscripcion)
VALUES
("Cristiano", "a@gmail.com", "888888888", "2001-06-01", "651314988", "Spain", "Barcelona", "Pelai, 8", "1234", "CLIENTE", "tarjeta", 3),
("Messi", "f@gmail.com", "888888888", "2001-001-01", "666666666", "Spain", "Barcelona", "Pelai, 8", "1234", "CLIENTE", "tarjeta", 3),
("Lebron", "c@gmail.com", "888888888", "2001-001-01", "666666666", "Spain", "Barcelona", "Pelai, 8", "1234", "CLIENTE", "tarjeta", 3);

-- ADMINS:
INSERT INTO suscriptor
(nombre, primer_apellido, email, password, tipo_usuario, metodo_de_pago, id_suscripcion)
VALUES
("Juan", "Mata", "juan@gmail.com", "1234", "ADMIN", "tarjeta", 3),
("Cristian", "Ayala", "cristian@gmail.com", "1234",  "ADMIN", "tarjeta", 3),
("Diego", "Catanyo", "diego@gmail.com", "1234",  "ADMIN", "tarjeta", 3);

INSERT INTO servicio
(nombre, descripcion, precio, puntuacion, activo, imagenes, id_suscriptor)
VALUES
("Paseo de perros", "Pasear a tu perro por el parque", "10€ la hora", 5, true, "[]", 1),
("Adiestramiento de perros", "Tu perro aprendera a comportarse", "30€ por dos horas", 4.5, true, "[]", 2),
("Cuidado de perros por vacaciones", "No te preocuparas por tu mascota durante el viaje", "40€ por dia", 3.8, true, "[]", 3);

INSERT INTO cliente
(nombre, primer_apellido, email, password, dni, nacimiento, telefono, pais, ciudad, direccion)
VALUES
("Zoya", "Aleksanyan", "zoya.aleksanyan@stucom.com", "1234", "888888888", "2001-06-01", "555555555", "Spain", "Barcelona", "Pelai, 8"),
("Javier", "Perea", "pedro.penya@stucom.com", "1234", "888888888", "2001-06-01", "555555555", "Spain", "Barcelona", "Pelai, 8"),
("Cristian", "Catalan", "cristian.catalan@stucom.com", "1234", "888888888", "2001-06-01", "555555555", "Spain", "Barcelona", "Pelai, 8");

INSERT INTO mascota
(nombre, nombre_mascota, descripcion, precio, puntuacion, activo, imagenes, id_cliente)
VALUES
("Necesito que alguien cuide mi perro", "Roby", "Me voy de vacaciones y quiero que alguien lo cuide por mi", "10€ la hora", 5, true, "[]", 1),
("Quiero que alguien me ayude a adiestrar a mi perro", "Roco", "No se comporta y no se que hacer ayuda :(", "30€ por dos horas", 4.5, false, "[]", 2),
("¿Alguien puede pasear a mi perro?", "Nina", "Trabajo de 9am a 9pm, y la pobre necesita caminar", "40€ por dia", 3.8, true, "[]", 3);

INSERT INTO proveedor
(nombre, cif, email, telefono, pais, ciudad, direccion)
VALUES
("Tienda Animal", "888888888", "tienda.animal@gmail.com", "888888888", "Spain", "Barcelona", "Pelai, 8"),
("Miscota", "888888888", "miscota@gmail.com", "888888888", "Spain", "Barcelona", "Pelai, 8"),
("Kiwoko", "888888888", "kiwoko@gmail.com", "888888888", "Spain", "Barcelona", "Pelai, 8");

INSERT INTO producto
(nombre, descripcion, precio, puntuacion, activo, imagenes, id_proveedor)
VALUES
("Pelota de tenis", "Especial para la mandibula de tu mascota", 5.50, 4.80, true, "[]", 1),
("Traje de Santa", "Perfecto para navidades", 8.50, 5, true, "[]", 2),
("Collar Rosado", "Collar talla M", 7.50, 4.80, true, "[]", 3);

INSERT INTO adquirir_servicio
(id_servicio, id_cliente)
VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO comentar_servicio
(comentario, id_servicio, id_cliente, fecha)
VALUES
("Excelente servicio, 10/10", 1, 1, "2022-01-17 10:55:58"),
("Muy buen chaval, lo recomiendo", 2, 2, "2022-01-01 23:59:59"),
("Mal, quedamos a una hora y nunca llego :(", 3, 3, "2022-01-01 23:59:59");

INSERT INTO adquirir_producto
(id_producto, id_cliente)
VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO comentar_producto
(comentario, id_producto, id_cliente, fecha)
VALUES
("A mi perro le ha gustado mucho", 1, 1, "2022-01-17 10:55:58"),
("Le ha quedado un poco pequeño pero bien", 2, 2, "2022-01-01 23:59:59"),
("Todo bien", 3, 3, "2022-01-01 23:59:59");

INSERT INTO adquirir_mascota
(id_mascota, id_suscriptor)
VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO comentar_mascota
(comentario, id_mascota, id_suscriptor, fecha)
VALUES
("El perro me ha mordido", 1, 1, "2022-01-17 10:55:58"),
("Muy buen perro", 2, 2, "2022-01-01 23:59:59"),
("Todo bien", 3, 3, "2022-01-01 23:59:59");