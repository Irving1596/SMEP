const express = require('express');
const router = new express.Router();
const profesor = require('../controllers/profesor.js');
const clase = require('../controllers/clase.js');
const estudiante = require('../controllers/estudiante.js');
const user = require('../controllers/login.js');
const calif = require('../controllers/calificacion.js');
/*router.route('/participante/:id?')
  .get(participantes.get)
  .post(participantes.post)
  .put(participantes.put)
  .delete(participantes.delete);
  router.get('/list/:id?',participantes.list);
  router.post('/add',participantes.save);
    router.get('/delete/:id',participantes.delete);
    */

     //SMEP
        //Sin Sequelize
        router.get('/profesor_list/',profesor.list_profesores);
        //Con Sequelize
     //router.get('/profesor_list/',profesor.list_profesores_seq);
     router.get('/estudiante_list/',estudiante.list_estudiantes);


//ruta para el login sin sequelize
     router.get('/user_list/',user.list_users);
//router of login with sequelize
     //router.get('/user_list/',user.list_users_seq);

//router that list all profesors
               router.get('/list_prof/:id?',profesor.list_prof);
//router that register a new profesor
          router.post('/reg_prof',profesor.reg_prof);
//router that update a profesor
          router.put('/act_prof',profesor.act_prof);

  //router that delete a profesor
           router.delete('/del_prof/:id?',profesor.del_prof);


     router.get('/prof_grup_list/:id?',profesor.list_profesores_grupo);
     router.post('/reg_clas',clase.reg_clase);
     router.get('/grup_list/:id?',clase.list_grupos);
      router.post('/reg_est',estudiante.reg_est);
        router.post('/reg_est_grup',estudiante.reg_est_grup);

        //ruta que inserta la calificacion referente al tema
      router.post('/reg_calif',calif.post_calif);
      //ruta que inserta la calificacion referente al tema y el estudiante
    router.post('/reg_calif_est',calif.post_calif_est);
//ruta que muestra la vista general de las calificaciones de los estudiantes de un profesor en especifico
router.get('/estud_calif_list/:id?',calif.list_calif_estud);

//ruta que muestra la vista general de las calificaciones obtenidas por los estudiantes en cada uno de los temas para un profesor en especifico
router.get('/tem_calif_list/:id?',calif.list_calif_tem);

// ruta utilizada para la grafica evaluacion por estudiantes
router.get('/estud_calif_graf/:id?',calif.list_calif_estudgraf);


module.exports = router;
