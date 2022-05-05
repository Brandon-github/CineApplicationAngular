import { Router } from 'express';
import peliculaController from '../controllers/peliculaController';

const router = Router();

router.get('/', peliculaController.obtenerTodasLasPeliculas);

router.get('/:id', peliculaController.obtenerPeliculaPorId);

router.get('/nombre/:nombre', peliculaController.obtenerPeliculaPorNombre);

router.post('/agregar', peliculaController.agregarPelicula);

router.put('/actualizar/:id', peliculaController.actualizarPelicula);

router.delete('/eliminar/:id', peliculaController.eliminarPelicula);

export default router;