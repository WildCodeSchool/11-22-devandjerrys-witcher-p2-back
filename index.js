const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const serverPort = 4242;

const app = express();

const data = require("./charactersWitcher.json");

app.use(morgan("tiny"));
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("une nouvelle requête est arrivée dans l’API !  ");
  res.json(data);
});

app.listen(serverPort, () => console.log("http://localhost:4242"));
