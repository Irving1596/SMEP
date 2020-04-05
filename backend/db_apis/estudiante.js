const pool = require('../services/database.js');
const mysql = require('mysql');


const baseQuery =
 `select ced_estudiante "id_estudiante",
        rol "rol",
        nombre "nombre"
   from Estudiante`;

async function find_estudiante(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.id_estudiante = context.id; // el bind se referencia con el id de la tabla
    binds.pass_estudiante = context.pass;
    query += `\nwhere ced_estudiante =`+"'"+binds.id_estudiante+"'";
    query += `\n AND password=`+"'"+binds.pass_estudiante+"'";

  }
  //console.log(query);
const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);
  //console.log('leng controller',result.length);
  return result;
}

async function crear_est(emp) {
 const estudiante = Object.assign({}, emp);
 const binds = {};
const jsondata = emp;
const values = [];

for(var i=0; i< jsondata.length; i++)
  values.push([jsondata[i].ced_estudiante,jsondata[i].password,jsondata[i].nombre,jsondata[i].apellido,jsondata[i].sexo,jsondata[i].direccion,jsondata[i].celular]);

  console.log("values",values);
 //const create_prof_Sql =
//  `INSERT INTO Profesor (CED_PROFESOR,PASSWORD,NOMBRE,APELLIDO,SEXO,DIRECCION,CORREO,CELULAR) VALUES (`+"'"+profesor.ced_prof+"','"+profesor.password+"','"+profesor.nombre+"','"+profesor.apellido+"','"+profesor.sexo+"','"+profesor.direccion+"','"+profesor.correo+"',"+profesor.celular+")";

  const create_est_Sql =
   `INSERT INTO Estudiante (CED_ESTUDIANTE,PASSWORD,NOMBRE,APELLIDO,SEXO,DIRECCION,CELULAR) VALUES ?`;

 const result = await pool.simpleExecute(create_est_Sql,values);


 return result;
}

module.exports.find_estudiante = find_estudiante;
module.exports.crear_est = crear_est;
