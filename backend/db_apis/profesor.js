const pool = require('../services/database.js');
const mysql = require('mysql');
const InsertQuery = require('mysql-insert-multiple');

const baseQuery =
 `select ced_profesor "id_profesor",
        rol "rol",
        nombre "nombre"
         from Profesor`;

async function find_profesor(context) {
  let query = baseQuery;
  const binds = {};
  if (context.id) {
    binds.id_profesor = context.id; // el bind se referencia con el id de la tabla
    binds.pass_profesor = context.pass;
    console.log(binds.pass_profesor);
    query += `\nwhere ced_profesor =`+"'"+binds.id_profesor+"'";
    query += `\n AND password=`+"'"+binds.pass_profesor+"'";
  }
  console.log(query);

const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);
  console.log(result);
  return result;
}


const profgrupQuery =
 `select ced_profesor "ced_profesor",
        nombre "nombre",
        apellido "apellido"
         from Profesor`;

// metodo que funciona para obtener el listado de los profesores, asi como tambien saber el profesor que pertenece a un determinado grupo
async function find_profesor_grupo(context) {
  let query = profgrupQuery;
  const binds = {};

  if (context.id) {
    binds.id_profesor = context.id; // el bind se referencia con el id de la tabla
    query += `\nwhere ced_profesor =`+"'"+binds.id_profesor+"'";
  }

const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);

  return result;

}



      /* const create_catedra_Sql =
       `INSERT INTO CATEDRA (SEDE_CRU,AREA_CONOCIMIENTO,CANTIDAD,ID_HORNADA,DESCRIPCION,COD_FACULTAD,COD_DEPTO,REQUISITOS) VALUES (:SEDE_CRU,:AREA_CONOCIMIENTO,:CANTIDAD,:ID_HORNADA,:DESCRIPCION,:COD_FACULTAD,:COD_DEPTO,:REQUISITOS) returning id_catedra into :id_catedra`;
*/


async function crear_prof(emp) {
 const profesor = Object.assign({}, emp);
 const binds = {};
const jsondata = emp;
const values = [];

for(var i=0; i< jsondata.length; i++)
  values.push([jsondata[i].ced_profesor,jsondata[i].password,jsondata[i].nombre,jsondata[i].apellido,jsondata[i].sexo,jsondata[i].direccion,jsondata[i].correo,jsondata[i].celular]);

  console.log("values",values);
 //const create_prof_Sql =
//  `INSERT INTO Profesor (CED_PROFESOR,PASSWORD,NOMBRE,APELLIDO,SEXO,DIRECCION,CORREO,CELULAR) VALUES (`+"'"+profesor.ced_prof+"','"+profesor.password+"','"+profesor.nombre+"','"+profesor.apellido+"','"+profesor.sexo+"','"+profesor.direccion+"','"+profesor.correo+"',"+profesor.celular+")";

  const create_prof_Sql =
   `INSERT INTO Profesor (CED_PROFESOR,PASSWORD,NOMBRE,APELLIDO,SEXO,DIRECCION,CORREO,CELULAR) VALUES ?`;

 const result = await pool.simpleExecute(create_prof_Sql,values);


 return result;
}

//function that list all profesors
const listprofQuery =
 `select * from Profesor`;

async function list_profesor(context) {
  let query = listprofQuery;
  const binds = {};
  if (context.id) {
    binds.id_profesor = context.id; // el bind se referencia con el id de la tabla
    query += `\nwhere ced_profesor =`+"'"+binds.id_profesor+"'";
  }

const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);
  return result;
}


//function that update a profesor
async function editar_prof(emp) {
 const profesor = Object.assign({}, emp);
const jsondata = emp;
const values = [];
console.log("jsondta",jsondata[0].ced_profesor);
//for(var i=0; i< jsondata.length; i++)
const binds2 = {
  ced_profesor: jsondata[0].ced_profesor, //todo en minuscula sino agrega nada es porque debe estar en minuscula
  password: jsondata[0].password,
    nombre: jsondata[0].nombre,
        apellido: jsondata[0].apellido,
  sexo:jsondata[0].sexo,
  direccion:jsondata[0].direccion,
  correo: jsondata[0].correo,
    celular: jsondata[0].celular,
};
const bindsid = {
  ID: jsondata[0].id,
};

const update_prof_Sql =
   "UPDATE Profesor SET ? where ?";
 const result = await pool.simpleExecuteupdate(update_prof_Sql,binds2,bindsid);


 return result;
}

//function that delete a profesor
async function borrar_prof(emp) {
const binds = {};
binds.id_profesor = emp.id;
const delete_prof_Sql =
   "DELETE FROM Profesor  where ID =?";
 const result = await pool.simpleExecute(delete_prof_Sql,binds.id_profesor);
 return result;
}

module.exports.find_profesor = find_profesor;
module.exports.find_profesor_grupo = find_profesor_grupo;
module.exports.crear_prof = crear_prof;
module.exports.editar_prof = editar_prof;
module.exports.list_profesor = list_profesor;
module.exports.borrar_prof = borrar_prof;
