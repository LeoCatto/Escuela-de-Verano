// const express = require('express');
const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const rutaAlumno = require('./alumnos');

const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/alumnos', rutaAlumno);

module.exports = router;