'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profesor = sequelize.define('Profesor', {
    ced_profesor: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    rol: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    nombre: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    apellido: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    sexo: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    direccion: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    correo: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    celular: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
  });
  Profesor.associate = function(models) {
    // associations can be defined here
    Profesor.hasMany(models.Grupo,{
      foreignKey:'id_profesor',
      as: 'grupos',
    })
  };
  return Profesor;
};
