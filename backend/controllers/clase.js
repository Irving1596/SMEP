const clase = require('../db_apis/clase.js');
const mysql = require('mysql');
const dbConfig = require('../config/database.js');
const controller= {};

controller.list_grupos =async function get(req, res, next) {
    try {
      const context = {};
      context.id = req.params.id;
      const rows = await clase.find_grupos(context);
      if (req.params.id) {
              //  if (rows.length === 1) {
                  /*res.render('customer',{
                    data: rows
                  });*/
                    res.status(200).json(rows);
                /*} else {
                  res.status(404).end();

                }*/
              } else {
          console.log(req.body.nombre);

        res.status(200).json(rows);
      }

        //  console.log(req.body.id_grupo);

    } catch (err) {
      next(err);
    }
  }

controller.reg_clase = async function post(req, res, next) {

  try {
    let clas = getClasFromRec(req);

    clas = await clase.crear_clase(clas);

      console.log(clas);
    res.status(201).json(clas);

  } catch (err) {
    next(err);
  }
}

//se reciben los datos del profesor ,esto desdes el front
function getClasFromRec(req) {
console.log(req.body);
const clase = {
 //PREFERIBLEMNTE TENER EL MISMO ORDEN DE LAS COLUMNAS EN LA BD
  id_grupo: req.body.id_grupo, //todo en minuscula sino agrega nada es porque debe estar en minuscula
  nombre: req.body.nombre,
    ced_profesor: req.body.ced_profesor,
};

return req.body;
}

module.exports=controller;
