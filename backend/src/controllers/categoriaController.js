import categoriaModel from '../models/categoriaModel';

const controller = {};

controller.obtenerTodasLasCategorias = (req, res) => {
    categoriaModel.obtenerTodasLasCategorias((err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err);
        }
    });
}

controller.obtenerCategoriaPorId = (req, res) => {
    const { id } = req.params;

    categoriaModel.obtenerCategoriaPorId([id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err);
        }
    });
}

controller.agregarCategoria = (req, res) => {
    const { nombre } = req.body;

    categoriaModel.agregarCategoria([nombre], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Categoria agregada con exito'});
        } else {
            console.error(err);
        }
    });
}

controller.actualizarCategoria = (req, res) => {
    const { nombre } = req.body;
    const { id } = req.params;

    categoriaModel.actualizarCategoria([nombre, id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: `Categoria con id ${id} actualizada con exito`})
        } else {
            console.error(err);
        }
    });
}

controller.eliminarCategoria = (req, res) => {
    const { id } = req.params;

    categoriaModel.eliminarCategoria([id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: `Categoria con id ${id} eliminada con exito`});
        } else {
            console.error(err);
        }
    });
}

export default controller;