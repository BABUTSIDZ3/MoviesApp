import express from "express";
import serial from "../models/serial.js";
import { METHOD_PASSWORD } from "../utils/config.js";
import { post } from "../utils/functions.js";

const serialsRouter = express.Router();

// get serials
serialsRouter.get("/", async (req, res) => {
  res.json(await serial.find({}));
});

// add serials
serialsRouter.post("/", async (req, res) => {
  post(req, res, serial, METHOD_PASSWORD);
});

export default serialsRouter;
