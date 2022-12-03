const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idRegistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "idRegistro"
    },
    datahoraEntrada: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "datahoraEntrada"
    },
    datahoraSaida: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "datahoraSaida"
    }
  };
  const options = {
    tableName: "registro",
    comment: "",
    indexes: []
  };
  const RegistroModel = sequelize.define("registroModel", attributes, options);
  return RegistroModel;
};