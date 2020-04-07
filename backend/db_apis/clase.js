const pool = require('../services/database.js');
const mysql = require('mysql');

const grupQuery =
 `select  cod_grupo "id_grupo",
      id_profesor "ced_profesor",
        nombre_grupo "nombre"
         from Grupo`;

async function find_grupos(context) {
  let query = grupQuery;
  const binds = {};
  if (context.id) {
    binds.id_profesor = context.id; // el bind se referencia con el id de la tabla
    query += `\nwhere id_profesor =`+"'"+binds.id_profesor+"'";
  }
const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);

  return result;

}

async function crear_clase(emp) {
 const clase = Object.assign({}, emp);
 const binds = {};
const jsondata = emp;
const values = [];


for(var i=0; i< jsondata.length; i++)
  values.push([jsondata[i].id_grupo,jsondata[i].ced_profesor,jsondata[i].nombre]);


 //const create_prof_Sql =
//  `INSERT INTO Profesor (CED_PROFESOR,PASSWORD,NOMBRE,APELLIDO,SEXO,DIRECCION,CORREO,CELULAR) VALUES (`+"'"+profesor.ced_prof+"','"+profesor.password+"','"+profesor.nombre+"','"+profesor.apellido+"','"+profesor.sexo+"','"+profesor.direccion+"','"+profesor.correo+"',"+profesor.celular+")";

  const create_clas_Sql =
   `INSERT INTO Grupo (COD_GRUPO,ID_PROFESOR,NOMBRE_GRUPO) VALUES ?`;

 const result = await pool.simpleExecute(create_clas_Sql,values);


 return result;
}

async function crear_clase_estud(emp) {
 const clase = Object.assign({}, emp);
 const binds = {};
const jsondata = emp;
const values = [];

console.log("dentro de crear clase estudiante",jsondata);
  console.log("grupo",jsondata.length);
for(var i=0; i< jsondata.length; i++)
  values.push([jsondata[i].ced_estudiante,jsondata[i].ced_profesor,jsondata[i].id_grupo]);

console.log("values",values);
 //const create_prof_Sql =
//  `INSERT INTO Profesor (CED_PROFESOR,PASSWORD,NOMBRE,APELLIDO,SEXO,DIRECCION,CORREO,CELULAR) VALUES (`+"'"+profesor.ced_prof+"','"+profesor.password+"','"+profesor.nombre+"','"+profesor.apellido+"','"+profesor.sexo+"','"+profesor.direccion+"','"+profesor.correo+"',"+profesor.celular+")";

  const create_clas_est_Sql =
   `INSERT INTO Estudiante_Grupo (CED_ESTUDIANTE,CED_PROFESOR,ID_GRUPO) VALUES ?`;

 const result = await pool.simpleExecute(create_clas_est_Sql,values);
 return result;
}
module.exports.crear_clase = crear_clase;
module.exports.find_grupos = find_grupos;
module.exports.crear_clase_estud = crear_clase_estud;
