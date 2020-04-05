const pool = require('../services/database.js');
const mysql = require('mysql');


const baseQuery =
 `select id_administrador "id_admin",
        rol "rol"
   from Administrador`;

async function find_admin(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.id_admin = context.id; // el bind se referencia con el id de la tabla
    binds.pass_admin = context.pass;
    query += `\nwhere id_administrador =`+"'"+binds.id_admin+"'";
    query += `\n AND password=`+"'"+binds.pass_admin+"'";

  }
    console.log(query);
  //console.log(query);
const result = await pool.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);
  //console.log('leng controller',result.length);
  return result;
}

module.exports.find_admin= find_admin;
