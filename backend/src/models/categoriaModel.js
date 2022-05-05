import connection from "../config/connection";

const model = {};

let query;

model.obtenerTodasLasCategorias = (callback) => {
    query = `SELECT id_categoria, nombre_categoria
                FROM categoriasPeliculas`;
    

    connection.query(query, callback);
}

model.obtenerCategoriaPorId = (data, callback) =>{
    query = `SELECT id_categoria, nombre_categoria
                FROM categoriasPeliculas
                WHERE id_categoria = ?`;
    
    connection.query(query, data, callback);
}

model.agregarCategoria = (data, callback) => {
    query = `INSERT INTO categoriasPeliculas(nombre_categoria)
                VALUES(?)`;
    
    connection.query(query, data, callback);
}

model.actualizarCategoria = (data, callback) => {
    query = `UPDATE categoriasPeliculas
                SET nombre_categoria = ?
                WHERE id_categoria = ?`;

    connection.query(query, data, callback);
}

model.eliminarCategoria = (data, callback) => {
    query = `DELETE FROM categoriasPeliculas
                WHERE id_categoria = ?`;
    
    connection.query(query, data, callback);
}

export default model;