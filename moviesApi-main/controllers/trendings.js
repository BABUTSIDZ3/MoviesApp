import express from "express";
import trending from "../models/trending.js";
import { METHOD_PASSWORD } from "../utils/config.js";
import { post } from "../utils/functions.js";

const trendingRouter = express.Router();

// get all trending movies
trendingRouter.get("/", async (req, res) => {
  res.json(await trending.find({}));
});

// add trending movie
trendingRouter.post("/", async (req, res) => {
  post(req, res, trending, METHOD_PASSWORD);
});

export default trendingRouter;
