const profesor = require('../db_apis/profesor.js');
const mysql = require('mysql');
const dbConfig = require('../config/database.js');
const db = require('../models/index');
const Prof = db.sequelize.models.Profesor;
const controller= {};

controller.list_profesores =async function get(req, res, next) {
    try {
      const context = {};


      context.id = req.query.profId;
      context.pass = req.query.profPass;

      const rows = await profesor.find_profesor(context);
      if (req.query.profId) {
        if (rows.length === 1) {
          /*res.render('customer',{
            data: rows
          });*/
            res.status(200).json(rows[0]);
        } else {
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
      } else {
          console.log(req.body.nombre);

        res.status(200).json(rows);
      }
    } catch (err) {
      next(err);
    }
  }


    controller.reg_prof = async function post(req, res, next) {

      try {
        let prof = getProfFromRec(req);

        prof = await profesor.crear_prof(prof);

          console.log(prof);
        res.status(201).json(prof);

      } catch (err) {
        next(err);
      }
    }

    controller.act_prof = async function put(req, res, next) {

      try {
        let prof= req.body;
        prof = await profesor.editar_prof(prof);
        if (prof !== null) {
          res.status(200).json(prof);
        } else {
          res.status(404).end();
        }

      } catch (err) {
        next(err);
      }
    }

    controller.del_prof = async function del(req, res, next) {

      try {
    const context = {};
    context.id = req.params.id;
        prof = await profesor.borrar_prof(context);
        res.status(204).end();

      } catch (err) {
        next(err);
      }
    }


    controller.list_profesores_grupo =async function get(req, res, next) {
        try {
          const context = {};
          context.id = req.params.id;
          const rows = await profesor.find_profesor_grupo(context);
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
        } catch (err) {
          next(err);
        }
      }

      controller.list_prof =async function get(req, res, next) {
          try {
            const context = {};
            context.id = req.params.id;
            const rows = await profesor.list_profesor(context);
            if (req.params.id) {

                          res.status(200).json(rows);

                    } else {
                console.log(req.body.nombre);

              res.status(200).json(rows);
            }
          } catch (err) {
            next(err);
          }
        }


      controller.list_profesores_seq =async function get(req, res, next) {
try{
  //Project.findByPk(123).then(project => {
      /*   Prof.findAndCountAll({where:{id:4}
          ,raw: true
        }).then(result => {
      //  res.send(result);
  if(result.count>0){
    res.status(200).json(result);
  }
  else
  Prof.findAndCountAll({where:{id:2}
   ,raw: true
  }).then(result => {
    if(result.count>0){
      res.status(200).json(result);
    }
    })
  })*/

  Prof.findAndCountAll({where:{ced_profesor:"4-000", [db.Sequelize.Op.and]:{password:"123456"}}
    ,raw: true
  }).then(function(result){
//  res.send(result);
if(result.count>0){
res.status(200).json(result);
}
})

  } catch (err) {
    next(err);
  }
        };





  //se reciben los datos del profesor ,esto desdes el front
function getProfFromRec(req) {
  const prueb = Object.values(req.body);

  /*var result = Object.keys(req.body).map(function(key) {
  return [Number(key), req.body[key]];
});*/
  console.log("esto desde el getfromrec",req.body);
  const profesor = {
   //PREFERIBLEMNTE TENER EL MISMO ORDEN DE LAS COLUMNAS EN LA BD
    ced_prof: req.body.ced_profesor, //todo en minuscula sino agrega nada es porque debe estar en minuscula
    password: req.body.password,
      nombre: req.body.nombre,
          apellido: req.body.apellido,
    sexo: req.body.sexo,
    direccion: req.body.direccion,
    correo: req.body.correo,
      celular: req.body.celular,
  };
  return req.body;
}

  module.exports=controller;
  //module.exports.delete = del;
  //module.exports.put = put;
  //module.exports.post = post;
  //module.exports.get = get;
