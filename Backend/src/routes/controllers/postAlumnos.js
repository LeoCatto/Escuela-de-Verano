const { Alumnos } = require("../../db");
const axios = require("axios").default;
const { Op } = require("sequelize");
const { nombres } = require('../data.json')

async function getAlumnos(req, res) {
  try {
    const { name } = req.query;

    let seccion;

    if (!name) {

      seccion = await Alumnos.findAll();

    }else{

      seccion = await Alumnos.findAll({
        where:{name:{ [Op.iLike]: `%${name}%` }}
      })
    }


    return res.json(seccion);


  } catch (err) {
    console.error(err);
  }
}

async function postAlumnos(req, res) {
  try {
    const { name, years, DNI } = req.body;
    console.log(name);

    const escuela = await Alumnos.create({ 
      name,
      DNI,
      years 
    });

    res.send(200).json({
      ok: true,
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  postAlumnos,
  getAlumnos,
};
