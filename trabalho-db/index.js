const express = require("express");
const model = require("./models");

const app = express();
const area = model.areaModel;

app.use(express.json());


// Endpoint para criar uma area
app.post("/area", (req, res) => {
  // Promises
  area
    .create(req.body)
    .then((object) => {
      res.send(object);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// Endpoint para buscar area por id
app.get('/area/:id', (req, res) => {
    // Promises
    const id = req.params.id;
    area.findByPk(id)
    .then((object) => {
        res.send(object);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
});

// Inicialização do Servidor
app.listen(8000, (req, res) => {
    console.log('Servidor inicializado...')
});