const express = require("express");
const models = require("./models");
const routes = require("./routes/area.route.js");

const app = express();
const area = models.areaModel;

app.use(express.json());

app.use("", routes);


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
app.listen(8088, (req, res) => {
    console.log('Servidor inicializado...')
});