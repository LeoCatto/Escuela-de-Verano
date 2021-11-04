const { Alumnos } = require("../../db");
const axios = require("axios").default;
const { Op } = require("sequelize");
const { nombres } = require("../data.json");

async function getAlumnos(req, res) {
  try {
    const { name } = req.query;

    let seccion;

    if (!name) {
      seccion = await Alumnos.findAll();
    } else {
      seccion = await Alumnos.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
    }

    return res.json(seccion);
  } catch (err) {
    console.error(err);
  }
}

async function getParam(req, res) {
  try {
    const idA = req.params.id;
    let chico;

    const chango = await Alumnos.findAll();
    chico = chango.find((c) => c.clienteNro === idA)

    if(chico){
      return res.status(200).json(chico)
    }else{
      return res.status(400).json({
        message:`No hay alumno con id: ${idA}`
      })
    }

  } catch (err) {
    console.error(err);
  }
}

async function postAlumnos(req, res) {
  try {
    const { name, years, DNI, clienteNro } = req.body;

    const escuela = await Alumnos.create({
      name,
      DNI,
      years,
      clienteNro
    });

    res.status(200).json({
      ok: true,
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  postAlumnos,
  getAlumnos,
  getParam,
};
