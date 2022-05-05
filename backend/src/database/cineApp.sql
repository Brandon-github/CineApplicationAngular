CREATE DATABASE cineApp;

USE cineApp;

CREATE TABLE categoriasPeliculas(
    id_categoria INT NOT NULL,
    nombre_categoria VARCHAR(90) NOT NULL
);

ALTER TABLE categoriasPeliculas
    MODIFY id_categoria INT NOT NULL AUTO_INCREMENT,
    ADD CONSTRAINT PK_CATEGORIA PRIMARY KEY(id_categoria);

CREATE TABLE peliculas(
    id_pelicula INT NOT NULL,
    nombre_pelicula VARCHAR(150) NOT NULL,
    imagen_pelicula VARCHAR(400) NOT NULL,
    duracion_pelicula INT NOT NULL,
    id_categoria INT NOT NULL
);

ALTER TABLE peliculas
    MODIFY id_pelicula INT NOT NULL AUTO_INCREMENT,
    ADD CONSTRAINT PK_PELICULA PRIMARY KEY(id_pelicula),
    ADD CONSTRAINT FK_CATEGORIA FOREIGN KEY(id_categoria)
        REFERENCES categoriasPeliculas(id_categoria);


INSERT INTO categoriasPeliculas(nombre_categoria)
    VALUES
    ('Accion'),
    ('Aventura'),
    ('Terror');

INSERT INTO peliculas(nombre_pelicula, imagen_pelicula, duracion_pelicula, id_categoria)
    VALUES
    ('Spiderman No Way Home', 'https://as01.epimg.net/meristation/imagenes/2021/12/16/reportajes/1639644481_655591_1640209353_noticia_normal.jpg', 120, 1),
    ('Jumanji: El Siguiente Nivel', 'https://i0.wp.com/modogeeks.com/wp-content/uploads/2019/12/jumanji.jpg?fit=800%2C587&ssl=1', 85, 2),
    ('Scream: El Asesino esta en este poster', 'https://www.periodicocubano.com/wp-content/uploads/2022/01/Scream-5-El-cine-de-terror-genera-mas-que-la-saga-de-Spiderman-en-EEUU.jpg', 90, 3);