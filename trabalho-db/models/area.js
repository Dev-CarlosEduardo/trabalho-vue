const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idArea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idArea"
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    },
    registroIdRegistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Registro_idRegistro",
      references: {
        key: "idRegistro",
        model: "registroModel"
      }
    },
    usuarioIdUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Usuario_idUsuario",
      references: {
        key: "idUsuario",
        model: "usuarioModel"
      }
    }
  };
  const options = {
    tableName: "area",
    comment: "",
    indexes: [{
      name: "fk_Area_Registro1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Registro_idRegistro"]
    }, {
      name: "fk_Area_Usuario1_idx",
      unique: false,
      type: "BTREE",
      fields: ["Usuario_idUsuario"]
    }]
  };
  const AreaModel = sequelize.define("areaModel", attributes, options);
  return AreaModel;
};