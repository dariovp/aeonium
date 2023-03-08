import express from "express";
import { Application } from "express";
import router from "./src/routes/router";
const morgan = require("morgan");
var bodyParser = require('body-parser');

const app: Application = express()
const port: Number = 3000;

app.use(morgan('dev'))
app.use(bodyParser.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})