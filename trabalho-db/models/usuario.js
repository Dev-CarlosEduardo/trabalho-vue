const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "idUsuario"
    },
    email: {
      type: DataTypes.STRING(90),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    senha: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "senha"
    }
  };
  const options = {
    tableName: "usuario",
    comment: "",
    indexes: []
  };
  const UsuarioModel = sequelize.define("usuarioModel", attributes, options);
  return UsuarioModel;
};