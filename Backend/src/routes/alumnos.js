const { Router } = require("express");
const router = Router();
const { postAlumnos, getAlumnos, getParam } = require("./controllers/postAlumnos");
// const { mayus } = require('../utils/middlewares/mayus')
// const { mayus } = ('./utils/middlewares/mayus.js');

router.get('/', getAlumnos)
router.get('/:id', getParam)
router.post('/', postAlumnos)

module.exports = router;
