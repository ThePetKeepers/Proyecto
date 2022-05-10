USE petkeepers; 
DROP DATABASE petkeepers;

CREATE DATABASE petkeepers;
USE petkeepers;

CREATE TABLE suscripcion(
id INT PRIMARY KEY AUTO_INCREMENT,
tiempo VARCHAR(255),
precio double,
descripcion VARCHAR(255));

CREATE TABLE metodo_de_pago(
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(255));

CREATE TABLE tipo_usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(255));

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
ciudad VARCHAR(255),
direccion VARCHAR(255),
foto VARCHAR(255));

CREATE TABLE suscriptor(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
primer_apellido VARCHAR(255),
segundo_apellido VARCHAR(255),
email VARCHAR(255),
dni char(9),
nacimiento DATE,
telefono CHAR(9),
ciudad VARCHAR(255),
direccion VARCHAR(255),
foto VARCHAR(255),
password VARCHAR(255),
-- Id que tiene en la tabla cliente:
id_cliente INT NOT NULL,
tipo_usuario INT NOT NULL,
metodo_de_pago INT NOT NULL,
id_suscripcion INT NOT NULL,
FOREIGN KEY (id_cliente) 
	REFERENCES cliente (id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (tipo_usuario) 
	REFERENCES tipo_usuario (id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (metodo_de_pago) 
	REFERENCES metodo_de_pago (id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (id_suscripcion) 
	REFERENCES suscripcion (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE servicio(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
descripcion TEXT,
precio DOUBLE,
puntuacion DOUBLE,
activo BOOLEAN,
imagenes TEXT,
id_suscriptor INT NOT NULL,
FOREIGN KEY (id_suscriptor) 
	REFERENCES suscriptor (id) 
    ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE mascota(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
nombre_mascota VARCHAR(255),
descripcion TEXT,
precio DOUBLE,
puntuacion DOUBLE,
activo BOOLEAN,
imagenes TEXT,
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
ciudad VARCHAR(255),
direccion VARCHAR(255));

CREATE TABLE producto(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
descripcion TEXT,
precio DOUBLE,
puntuacion DOUBLE,
activo BOOLEAN,
imagenes TEXT,
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

INSERT INTO cliente
(nombre, primer_apellido, email, password, dni, nacimiento, telefono, ciudad, direccion)
VALUES
-- ADMINS:
("Juan", "Mata", "juan@gmail.com", "1234", "", null, "", "", ""),
("Cristian", "Ayala", "cristian@gmail.com", "1234", "", null, "", "", ""),
("Diego", "Catanyo", "diego@gmail.com", "1234", "", null, "", "", ""),
-- SUSCRIPTORES
("Cristiano", "Ronaldo", "a@gmail.com", "1234", "888888888", "2001-06-01", "555555555", "Barcelona", "Pelai, 8"),
("Leo", "Messi", "f@gmail.com", "1234", "888888888", "2001-06-01", "555555555", "Barcelona", "Pelai, 8"),
("Lebron", "James", "c@gmail.com", "1234", "888888888", "2001-06-01", "555555555", "Barcelona", "Pelai, 8"),
-- SOLO CLIENTES:
("Zoya", "Aleksanyan", "zoya.aleksanyan@stucom.com", "1234", "888888888", "2001-06-01", "555555555", "Barcelona", "Pelai, 8"),
("Javier", "Perea", "pedro.penya@stucom.com", "1234", "888888888", "2001-06-01", "555555555", "Spain", "Pelai, 8"),
("Cristian", "Catalan", "cristian.catalan@stucom.com", "1234", "888888888", "2001-06-01", "555555555", "Barcelona", "Pelai, 8");

-- ADMINS:
INSERT INTO suscriptor
(nombre, primer_apellido, email, password, id_cliente, tipo_usuario, metodo_de_pago, id_suscripcion)
VALUES
("Juan", "Mata", "juan@gmail.com", "1234", 1, 1, 1, 3),
("Cristian", "Ayala", "cristian@gmail.com", "1234", 2, 1, 2, 3),
("Diego", "Catanyo", "diego@gmail.com", "1234", 3, 1, 2, 3);

-- SUSCRIPTORES:
INSERT INTO suscriptor
(nombre, email, dni, nacimiento, telefono, ciudad, direccion, password, id_cliente, tipo_usuario, metodo_de_pago, id_suscripcion)
VALUES
("Cristiano", "a@gmail.com", "888888888", "2001-06-01", "651314988", "Barcelona", "Pelai, 8", "1234", 4, 2, 1, 2),
("Leo", "f@gmail.com", "888888888", "2001-001-01", "666666666", "Barcelona", "Pelai, 8", "1234", 5, 2, 2, 3),
("Lebron", "c@gmail.com", "888888888", "2001-001-01", "666666666", "Barcelona", "Pelai, 8", "1234", 6, 2, 2, 3);

INSERT INTO servicio
(nombre, descripcion, precio, puntuacion, activo, imagenes, id_suscriptor)
VALUES
("Paseo de perros", "Pasear a tu perro por el parque", 10.50, 5, true, "poa.png, lsls.png", 1),
("Adiestramiento de perros", "Tu perro aprendera a comportarse", 30.20, 4.5, true, "aa.png, pp.png", 2),
("Cuidado de perros por vacaciones", "No te preocuparas por tu mascota durante el viaje", 40.80, 3.8, true, "aa.png, pp.png", 3);

INSERT INTO mascota
(nombre, nombre_mascota, descripcion, precio, puntuacion, activo, imagenes, id_cliente)
VALUES
("Necesito que alguien cuide mi perro", "Roby", "Me voy de vacaciones y quiero que alguien lo cuide por mi", 10.20, 5, true, "k.png, l.png", 1),
("Quiero que alguien me ayude a adiestrar a mi perro", "Roco", "No se comporta y no se que hacer ayuda :(", 8.20, 4.5, false, "lala.png, ppp.png", 2),
("¿Alguien puede pasear a mi perro?", "Nina", "Trabajo de 9am a 9pm, y la pobre necesita caminar", 15.20, 3.8, true, "haom.png, iann.png", 3);

INSERT INTO proveedor
(nombre, cif, email, telefono, ciudad, direccion)
VALUES
("Tienda Animal", "888888888", "tienda.animal@gmail.com", "888888888", "Barcelona", "Pelai, 8"),
("Miscota", "888888888", "miscota@gmail.com", "888888888", "Barcelona", "Pelai, 8"),
("Kiwoko", "888888888", "kiwoko@gmail.com", "888888888", "Barcelona", "Pelai, 8");

INSERT INTO producto
(nombre, descripcion, precio, puntuacion, activo, imagenes, id_proveedor)
VALUES
("Pelota de tenis", "Especial para la mandibula de tu mascota", 5.50, 4.80, true, "hola.png, adeu.png", 1),
("Traje de Santa", "Perfecto para navidades", 8.50, 5, true, "a.png, e.png", 2),
("Collar Rosado", "Collar talla M", 7.50, 4.80, true, "q.png, k.png", 3);

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