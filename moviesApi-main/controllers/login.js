import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express from "express";
import User from "../models/User.js";
import { METHOD_PASSWORD, SECRET } from "../utils/config.js";

const loginRouter = express.Router();

// generate token and checd valid account if it valid
loginRouter.post("/", async (request, response) => {
  if (METHOD_PASSWORD == request.headers.authorization) {
    const { username, password } = request.body;
    const user = await User.findOne({ username });
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);
    if (!(user && passwordCorrect)) {
      return response.status(401).json({
        error: "invalid username or password",
      });
    }
    const userForToken = {
      username: user.username,
      id: user._id,
    };
    const token = jwt.sign(userForToken, SECRET);
    response.json({
      user: user.username,
      token: token,
    });
  } else {
    response.send("you have not access to this address");
  }
});

export default loginRouter;
