const pool = require('../services/database.js');
const mysql = require('mysql');


async function insert_calif(emp) {
 const estudiante = Object.assign({}, emp);
 const binds = {};
const jsondata = emp;
const values = [];
//for(var i=0; i< jsondata.length; i++)
  values.push([jsondata.cod_tema,jsondata.puntos_max,jsondata.puntos_obt,jsondata.calificacion]);


 //const create_prof_Sql =
//  `INSERT INTO Profesor (CED_PROFESOR,PASSWORD,NOMBRE,APELLIDO,SEXO,DIRECCION,CORREO,CELULAR) VALUES (`+"'"+profesor.ced_prof+"','"+profesor.password+"','"+profesor.nombre+"','"+profesor.apellido+"','"+profesor.sexo+"','"+profesor.direccion+"','"+profesor.correo+"',"+profesor.celular+")";

  const create_cal_Sql =
   `INSERT INTO Calificacion_Tema (COD_TEMA,PUNTOS_MAX,PUNTOS_OBT,CALIFICACION) VALUES ?`;

 const result = await pool.simpleExecute(create_cal_Sql,values);

 return result;
}

async function insert_calif_estud(emp) {
 const estudiante = Object.assign({}, emp);
 const binds = {};
const jsondata = emp;
const values = [];
//for(var i=0; i< jsondata.length; i++)
  values.push([jsondata.id_calftema,jsondata.id_estudiante,jsondata.fecha]);


 //const create_prof_Sql =
//  `INSERT INTO Profesor (CED_PROFESOR,PASSWORD,NOMBRE,APELLIDO,SEXO,DIRECCION,CORREO,CELULAR) VALUES (`+"'"+profesor.ced_prof+"','"+profesor.password+"','"+profesor.nombre+"','"+profesor.apellido+"','"+profesor.sexo+"','"+profesor.direccion+"','"+profesor.correo+"',"+profesor.celular+")";

  const create_cal_est_Sql =
   `INSERT INTO Estudiante_Calif (ID_CALFTEMA,ID_ESTUDIANTE,FECHA) VALUES ?`;

 const result = await pool.simpleExecute(create_cal_est_Sql,values);

 return result;
}



const calif_estudsQuery =
 `SELECT * FROM vista_prof_calif`;

async function find_calif_estuds(context) {
  let query = calif_estudsQuery;
  const binds = {};

  if (context.id) {
    binds.id_profesor = context.id; // el bind se referencia con el id de la tabla
    query += `\nwhere ced_profesor =`+"'"+binds.id_profesor+"'";
  }

const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);

  return result;

}

// modelo para la grafica de evaluacion por estudiantes
const calif_estudsgrafQuery =
 `SELECT * FROM vista_prof_calif_nota`;

async function find_calif_estudsgraf(context) {
  let query = calif_estudsgrafQuery;
  const binds = {};

  if (context.id) {
    binds.id_profesor = context.id; // el bind se referencia con el id de la tabla
    query += `\nwhere ced_profesor =`+"'"+binds.id_profesor+"'";
  }

const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);

  return result;

}


// modelo para obtener las estadisticas de las notas en cada uno de los temas
const calif_temsQuery =
 `SELECT *,(aprobados/total)*100 rendimiento FROM vista_prof_tema`;

async function find_calif_tems(context) {
  let query = calif_temsQuery;
  const binds = {};

  if (context.id) {
    binds.id_profesor = context.id; // el bind se referencia con el id de la tabla
    query += `\nwhere ced_profesor =`+"'"+binds.id_profesor+"'";
  }

const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);

  return result;

}
module.exports.insert_calif = insert_calif;
module.exports.insert_calif_estud = insert_calif_estud;
module.exports.find_calif_estuds = find_calif_estuds;
module.exports.find_calif_estudsgraf = find_calif_estudsgraf;
module.exports.find_calif_tems = find_calif_tems;
