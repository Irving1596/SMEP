const calificacion = require('../db_apis/calificacion.js');
const mysql = require('mysql');
const dbConfig = require('../config/database.js');
const controller = {};

controller.post_calif = async function post(req, res, next) {

  try {
    let cal = getCalFromRec(req);
    cal = await calificacion.insert_calif(cal);

    res.status(201).json(cal);

  } catch (err) {
    next(err);
  }
}

controller.post_calif_est = async function post(req, res, next) {

  try {

    let califest = getCalEstFromRec(req);

    califest = await calificacion.insert_calif_estud(califest);
    res.status(201).json(califest);

  } catch (err) {
    next(err);
  }
}

controller.list_calif_estud =async function get(req, res, next) {
    try {
      const context = {};
      context.id = req.params.id;
      const rows = await calificacion.find_calif_estuds(context);

        res.status(200).json(rows);

    } catch (err) {
      next(err);
    }
  }

//controlador para la vista de las graficas
controller.list_calif_estudgraf=async function get(req, res, next) {
    try {
      const context = {};
      context.id = req.params.id;
      console.log("contetx",context)
      const rows = await calificacion.find_calif_estudsgraf(context);

        res.status(200).json(rows);

    } catch (err) {
      next(err);
    }
  }

  controller.list_calif_tem =async function get(req, res, next) {
      try {
        const context = {};
        context.id = req.params.id;
        const rows = await calificacion.find_calif_tems(context);

          res.status(200).json(rows);

      } catch (err) {
        next(err);
      }
    }

function getCalFromRec(req) {
console.log(req.body);
const estudiante = {
 //PREFERIBLEMNTE TENER EL MISMO ORDEN DE LAS COLUMNAS EN LA BD
//  id: req.body.ced_estudiante, //todo en minuscula sino agrega nada es porque debe estar en minuscula
  cod_tema: req.body.cod_tema,
    puntos_max: req.body.puntos_max,
    puntos_obt: req.body.puntos_obt,
  //completado: req.body.sexo,
  calificacion: req.body.calificacion,
  //celular: req.body.celular
};
//console.log("estudiante",estudiante);
return req.body;
}

function getCalEstFromRec(req) {
console.log(req.body);
const estudiante = {
 //PREFERIBLEMNTE TENER EL MISMO ORDEN DE LAS COLUMNAS EN LA BD
//  id: req.body.ced_estudiante, //todo en minuscula sino agrega nada es porque debe estar en minuscula
  cod_tema: req.body.cod_tema,
    puntos_max: req.body.puntos_max,
    puntos_obt: req.body.puntos_obt,
  //completado: req.body.sexo,
  calificacion: req.body.calificacion,
  //celular: req.body.celular
};
//console.log("estudiante",estudiante);
return req.body;
}


module.exports = controller;
