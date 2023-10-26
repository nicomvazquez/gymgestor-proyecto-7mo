CREATE DATABASE gym_database;
USE gym_database;

CREATE TABLE cliente(
    id_cliente INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    dni INTEGER(8)
);

CREATE TABLE staf(
    id_staf INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    dni INTEGER(8),
    usuario VARCHAR(50),
    contraseña VARCHAR(50)
);

CREATE TABLE mensualidad(
    id_mensualidad INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_cliente INTEGER(11),
    fecha_pago DATETIME DEFAULT NOW()
);

CREATE TABLE producto(
    id_producto INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    descripcion VARCHAR(50),
    precio INTEGER(10),
    stock INTEGER(10)
);

CREATE TABLE ventas(
    id_venta INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_cliente INTEGER(11),
    id_producto INTEGER(11),
    cantidad INTEGER(10),
    monto INTEGER(10),
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);