const { Router } = require("express");
const router = Router();
const { postAlumnos, getAlumnos } = require("./controllers/postAlumnos");
// const { mayus } = require('../utils/middlewares/mayus')
// const { mayus } = ('./utils/middlewares/mayus.js');

router.get('/', getAlumnos)
// router.get('/:id', getQuery)
router.post('/', postAlumnos)
// router.delete('/', deleteAlumnos)

module.exports = router;
