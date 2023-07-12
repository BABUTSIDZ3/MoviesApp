import express from "express";
import movie from "../models/movie.js";
import { METHOD_PASSWORD } from "../utils/config.js";
import { post } from "../utils/functions.js";

const moviesRouter = express.Router();

// get movies
moviesRouter.get("/", async (req, res) => {
  res.json(await movie.find());
});

// add movies
moviesRouter.post("/", async (req, res) => {
  post(req, res, movie, METHOD_PASSWORD);
});

export default moviesRouter;
