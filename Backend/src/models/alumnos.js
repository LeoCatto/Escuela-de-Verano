const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Alumnos', {
    id:{
      type: DataTypes.UUID,
      primaryKey:true,
      allownull:false,
      defaultValue:Sequelize.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clienteNro:{
      type: DataTypes.STRING,
      allowNull:false
    },
    years:{
      type: DataTypes.STRING
    },
    DNI:{
      type:DataTypes.STRING,
      allowNull:false
    },
    mail:{
      type: DataTypes.STRING
    },
    quincena:{
        type: DataTypes.STRING
    },
    tiempo:{
        type: DataTypes.DATE
    }

  });
}