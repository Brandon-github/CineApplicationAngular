import express from 'express';
import morgan from 'morgan';

import peliculaRoutes from './routes/pelicula.routes';
import categoriaRoutes from './routes/categoria.routes';

// Initialization Application
const app = express();


// Settings
app.set('port', process.env.PORT || 5000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/peliculas', peliculaRoutes);
app.use('/api/categorias', categoriaRoutes);

export default app;