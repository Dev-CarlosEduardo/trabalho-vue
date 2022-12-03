const model = require("../models");

const Area = model.areaModel;



const create = (request, response) => {
  const paData = {
    nome: request.body.nome,
    descricao: request.body.descricao,
  };

  registro.create(paData)
    .then((object) => {
      const eaData = {
        idRegistro: object.dataValues.idRegistro,
        datahoraEntrada: request.body.datahoraEntrada,
        datahoraSaida: request.body.datahoraSaida,
      };

      let dataResponse = { ...object.dataValues };

      Area.create(eaData)
        .then((object) => {
          let result = object.dataValues;
          delete result.idRegistro;
          dataResponse = { ...dataResponse, ...result };
          response.status(200).send(dataResponse);
        })
        .catch((error) => {
          console.error(error);
          response.status(400).send(error);
        });
    })
    .catch((error) => {
      console.error(error);
      response.status(400).send(error);
    });
};

//Lista todos os eventos acadêmicos
const getAll = (request, response) => {
  Area.findAll({
    attributes: [
      "idRegistro",
      "datahoraEntrada",
      "datahoraSaida",
      "registroModel.nome",
      "registroModel.descricao",
    ],
    raw: true,
    include: [
      {
        model: registro,
        required: true,
        attributes: [],
      },
    ],
  })
    .then((object) => {
      console.log(object);
      response.status(200);
      response.send(object);
    })
    .catch((error) => response.status(400).send(error));
};

//Seleciona uma area por ID
const getById = (request, response) => {
  Area.findByPk(request.params.id)
    .then((object) => {
      response.status(200).send(object.dataValues);
    })
    .catch((error) => {
      console.error(error);
      response.status(400).send(error);
    });
};

//Altera uma area dado um ID
const alterById = (request, response) => {
  const paData = {
    nome: request.body.nome,
    descricao: request.body.descricao,
  };
  registro.update(paData, {
    raw: true,
    where: { idRegistro: request.params.id },
  })
    .then((object) => {
      const eaData = {
        idRegistro: request.params.id,
        datahoraEntrada: request.body.datahoraEntrada,
        datahoraSaida: request.body.datahoraSaida,
      };

      Area.update(eaData, {
        where: { idRegistro: eaData.idRegistro },
        raw: true,
      })
        .then((object) => {
          response
            .status(200)
            .send("Area de id = " + request.params.id + " Atualizado!");
        })
        .catch((error) => {
          console.error(error);
          response.status(400).send(error);
        });
    })
    .catch((error) => {
      console.error(error);
      response.status(400).send(error);
    });
};

const deleteById = (request, response) => {
  Area.destroy({
    where: { idRegistro: request.params.id },
  })
    .then((object) => {
      if (object === 0) {
        response
          .status(200)
          .send("Nenhuma area foi encontrada para deletar!");
      } else {
        response
          .status(200)
          .send(
            "Area com id = " + request.params.id + " deletado!"
          );
      }
    })
    .catch((error) => {
      console.error(error);
      response.status(400).send(error);
    });
};

module.exports = {
  create,
  getAll,
  getById,
  alterById,
  deleteById,
};