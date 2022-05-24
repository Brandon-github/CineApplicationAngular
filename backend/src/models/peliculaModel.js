import connection from '../config/connection';

const model = {};

let query;

model.obtenerTodasLasPeliculas = async (callback) => {
    query = `SELECT p.id_pelicula, p.nombre_pelicula, p.imagen_pelicula, p.duracion_pelicula, p.id_categoria
                FROM peliculas AS p`;

    await connection.query(query, callback);
};

model.obtenerPeliculaPorId = async (data, callback) => {
    query = `SELECT p.nombre_pelicula, p.imagen_pelicula, p.duracion_pelicula, p.id_categoria
                FROM peliculas AS p
                WHERE id_pelicula = ?`;
    
    await connection.query(query, data, callback);
};

model.obtenerPeliculaPorNombre = async (data, callback) => {
    query = `SELECT p.id_pelicula, p.nombre_pelicula, p.imagen_pelicula, p.duracion_pelicula, p.id_categoria
                FROM peliculas AS p
                WHERE p.nombre_pelicula = ?`;

    await connection.query(query, data, callback);
};

model.agregarPelicula = async (data, callback) => {
    query = `INSERT INTO peliculas(nombre_pelicula, imagen_pelicula, duracion_pelicula, id_categoria)
                VALUES(?, ?, ?, ?)`;

    await connection.query(query, data, callback);
};

model.actualizarPelicula = async (data, callback) => {
    query = `UPDATE peliculas
                SET nombre_pelicula = ?, imagen_pelicula = ?, duracion_pelicula = ?, id_categoria = ?
                WHERE id_pelicula = ?`;

    await connection.query(query, data, callback);
};

model.eliminarPelicula = async (data, callback) => {
    query = `DELETE FROM peliculas
                WHERE id_pelicula = ?`;

    await connection.query(query, data, callback);
};

export default model;
