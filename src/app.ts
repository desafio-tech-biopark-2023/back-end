import "reflect-metadata";
import "express-async-errors";
import express, { response } from "express";

let cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (require, response) => {
  response.send("Hello, world!");
});

export default app;
