-- Active: 1715485426440@@LocalHost@5432@postgres@public

--creacion de tabla de libros
CREATE TABLE Libros (
    libro_id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    genero VARCHAR(50),
    anio_publicacion INTEGER,
    isbn VARCHAR(20),
    disponibilidad VARCHAR(20) DEFAULT 'disponible'
);

--Creacion de tabla de los usuarios
CREATE TABLE Usuarios (
    usuario_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    correo_electronico VARCHAR(100)
);

--Creacion de tablas para prestamos
CREATE TABLE Prestamos (
    prestamo_id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES Usuarios(usuario_id),
    libro_id INTEGER REFERENCES Libros(libro_id),
    fecha_prestamo DATE DEFAULT CURRENT_DATE,
    fecha_devolucion DATE
);

--Creacion de tabla para control de libros persidos
CREATE TABLE Libros_Perdidos (
    perdida_id SERIAL PRIMARY KEY,
    libro_id INTEGER REFERENCES Libros(libro_id),
    fecha_notificacion DATE DEFAULT CURRENT_DATE,
    usuario_id INTEGER REFERENCES Usuarios(usuario_id)
);

