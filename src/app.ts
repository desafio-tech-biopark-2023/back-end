import "reflect-metadata";
import "express-async-errors";
import express, { response } from "express";
import { appRoutes } from "./routes/routes";
import { buildingRoutes } from "./routes/building.routes";

let cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

appRoutes(app);

export default app;
