const express = require('express');
const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require('./routes/routes.js');
// Importamos el Middleware Error Handler
const errorHandler = require('./middlewares/errorHandler.js');

app.use('/libros', librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
console.log('Servidor iniciado en el puerto 3000');
});