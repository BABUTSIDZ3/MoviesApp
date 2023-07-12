import express from "express";
import { MONGODB_URI, PORT } from "./utils/config.js";
import usersRouter from "./controllers/users.js";
import loginRouter from "./controllers/login.js";
import trendingRouter from "./controllers/trendings.js";
import recomendedRouter from "./controllers/recomendeds.js";
import moviesRouter from "./controllers/movies.js";
import cors from "cors";
import serialsRouter from "./controllers/serials.js";
import mongoose from "mongoose";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("conected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/signup", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/trending", trendingRouter);
app.use("/api/recomended", recomendedRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/serials", serialsRouter);

app.listen(PORT, () => {
  console.log(`started on port ${PORT}`);
});
