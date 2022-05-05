import { Router } from "express";
import categoriaController from "../controllers/categoriaController";

const router = Router();

router.get('/', categoriaController.obtenerTodasLasCategorias);

router.get('/:id', categoriaController.obtenerCategoriaPorId);

router.post('/agregar', categoriaController.agregarCategoria);

router.put('/actualizar/:id', categoriaController.actualizarCategoria);

router.delete('/eliminar/:id', categoriaController.eliminarCategoria);

export default router;