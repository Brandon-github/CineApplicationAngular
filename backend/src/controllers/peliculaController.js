import peliculaModel from '../models/peliculaModel';

const controller = {};


controller.obtenerTodasLasPeliculas = (req, res) => {
    peliculaModel.obtenerTodasLasPeliculas((err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err);
        }
    });
}

controller.obtenerPeliculaPorId = (req, res) => {
    const { id } = req.params;

    peliculaModel.obtenerPeliculaPorId([id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err);
        }
    });
}

controller.obtenerPeliculaPorNombre = (req, res) => {
    const { nombre } = req.params;

    peliculaModel.obtenerPeliculaPorNombre([nombre], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err);
        }
    });
}

controller.agregarPelicula = (req, res) => {
    const { nombre_pelicula, imagen_pelicula, duracion_pelicula, id_categoria } = req.body;

    peliculaModel.agregarPelicula([nombre_pelicula, imagen_pelicula, duracion_pelicula, id_categoria], (err, rows, fields) => {
        if (!err) {
            res.json({Status: "Usuario agregado con exito"})
        } else {
            console.error(err);
        }
    });
}

controller.actualizarPelicula = (req, res) => {
    const { nombre, imagen, duracion, categoria } = req.body;
    const { id } = req.params;

    peliculaModel.actualizarPelicula([nombre, imagen, duracion, categoria, id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: `Usuario con id ${id} actualizado con exito`});
        } else {
            console.error(err);
        }
    });
}

controller.eliminarPelicula = (req, res) => {
    const { id } = req.params;

    peliculaModel.eliminarPelicula([id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: `Usuario con id ${id} eliminado con exito`});
        } else {
            console.error(err);
        }
    });
}

export default controller;