const estudiante = require('../db_apis/estudiante.js');
const profesor = require('../db_apis/profesor.js');
const mysql = require('mysql');
const dbConfig = require('../config/database.js');
const controller = {};
const clase = require('../db_apis/clase.js');


controller.list_estudiantes = async function get(req, res, next) {
    try {
        const context = {};

            context.id = req.query.estId;
            context.pass = req.query.estPass;
      const rows = await estudiante.find_estudiante(context);
      if (req.query.estId) {
        if (rows.length === 1) {
          /*res.render('customer',{
            data: rows
          });*/
            res.status(200).json(rows[0]);
        } else{
          const rows = await profesor.find_profesor(context);
          if (req.query.estId) {
            if (rows.length === 1) {
              res.status(200).json(rows[0]);
          }
          else {
            res.format ({
     'text/plain': function() {
        res.send('hey');
     },

     'text/html': function() {
        res.send('hey');
     },

     'application/json': function() {
        res.send({ rol: '' });
     },

     'default': function() {
        // log the request and respond with 406
        res.status(406).send('Not Acceptable');
     }
  });

          }

        }
      }
    }else {
            console.log(req.body.nombre);
            res.status(200).json(rows);
        }
    } catch (err) {
        next(err);
    }
}

controller.reg_est = async function post(req, res, next) {

  try {
    let est = getEstFromRec(req);
    est = await estudiante.crear_est(est);

      console.log("respuesta del post en est",est);
    res.status(201).json(est);

  } catch (err) {
    next(err);
  }
}

controller.reg_est_grup = async function post(req, res, next) {

  try {

    let clas = getEstClasFromRec(req);

    clas = await clase.crear_clase_estud(clas);

        console.log("respuesta del post en class",clas);
    res.status(201).json(clas);

  } catch (err) {
    next(err);
  }
}

function getEstFromRec(req) {
console.log(req.body);
const estudiante = {
 //PREFERIBLEMNTE TENER EL MISMO ORDEN DE LAS COLUMNAS EN LA BD
  ced_estudiante: req.body.ced_estudiante, //todo en minuscula sino agrega nada es porque debe estar en minuscula
  password: req.body.password,
    nombre: req.body.nombre,
        apellido: req.body.apellido,
  sexo: req.body.sexo,
  direccion: req.body.direccion,
    celular: req.body.celular
};
//console.log("estudiante",estudiante);
return req.body;
}

function getEstClasFromRec(req) {
console.log(req.body);
const clase = {
 //PREFERIBLEMNTE TENER EL MISMO ORDEN DE LAS COLUMNAS EN LA BD
ced_estudiante: req.body.ced_estudiante,
ced_profesor: req.body.ced_profesor,
    id_grupo: req.body.id_grupo
};

return req.body;
}


module.exports = controller;
