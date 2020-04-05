'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grupo = sequelize.define('Grupo', {
    cod_grupo: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    nombre_grupo: {
      type:DataTypes.STRING,
      defaultValue:false,
    }
  });
  Grupo.associate = function(models) {
    // associations can be defined here
Grupo.belongsTo(models.Profesor,{
  foreignKey:'id_profesor',
  onDelete: 'CASCADE',
});
 };
  return Grupo;
};
