/* eslint-disable prettier/prettier */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const serverPort = 4242;

const app = express();

const dataingredients = require("./ingredients.json");
const datapotions = require("./potions.json");

app.use(morgan("tiny"));
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/ingredients", (req, res) => {
  console.log("une nouvelle requête est arrivée dans l’API pour les ingrédients !  ");
  res.json( dataingredients );
});

app.get("/potions", (req, res) => {
  console.log("une nouvelle requête est arrivée dans l’API pour les potions !  ");
  res.json( datapotions );
});

app.listen(serverPort, () => console.log("http://localhost:4242"));
