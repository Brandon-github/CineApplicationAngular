import connection from '../config/connection';

const model = {};

let query;

model.obtenerTodasLasPeliculas = (callback) => {
    query = `SELECT p.id_pelicula, p.nombre_pelicula, p.imagen_pelicula, p.duracion_pelicula, p.id_categoria
                FROM peliculas AS p`;

    connection.query(query, callback);
};

model.obtenerPeliculaPorId = (data, callback) => {
    query = `SELECT p.nombre_pelicula, p.imagen_pelicula, p.duracion_pelicula, p.id_categoria
                FROM peliculas AS p
                WHERE id_pelicula = ?`;
    
    connection.query(query, data, callback);
};

model.obtenerPeliculaPorNombre = (data, callback) => {
    query = `SELECT p.id_pelicula, p.nombre_pelicula, p.imagen_pelicula, p.duracion_pelicula, c.nombre_categoria
                FROM peliculas AS p
                INNER JOIN categoriasPeliculas AS c
                    ON (p.id_categoria = c.id_categoria)
                WHERE p.nombre_pelicula LIKE "?%"`;
    
    connection.query(query, data, callback);
};

model.agregarPelicula = (data, callback) => {
    query = `INSERT INTO peliculas(nombre_pelicula, imagen_pelicula, duracion_pelicula, id_categoria)
                VALUES(?, ?, ?, ?)`;

    connection.query(query, data, callback);
};

model.actualizarPelicula = (data, callback) => {
    query = `UPDATE peliculas
                SET nombre_pelicula = ?, imagen_pelicula = ?, duracion_pelicula = ?, id_categoria = ?
                WHERE id_pelicula = ?`;

    connection.query(query, data, callback);
};

model.eliminarPelicula = (data, callback) => {
    query = `DELETE FROM peliculas
                WHERE id_pelicula = ?`;

    connection.query(query, data, callback);
};

export default model;
