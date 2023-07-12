import express from "express";
import recomended from "../models/recomended.js";
import { METHOD_PASSWORD } from "../utils/config.js";
import { post } from "../utils/functions.js";

const recomendedRouter = express.Router();

// get recomended movies
recomendedRouter.get("/", async (req, res) => {
  res.json(await recomended.find({}));
});

// add recomended movies
recomendedRouter.post("/", async (req, res) => {
  post(req, res, recomended, METHOD_PASSWORD);
});

export default recomendedRouter;
