import bcrypt from "bcrypt";
import express from "express";
import User from "../models/User.js";
import { METHOD_PASSWORD, saltrounds } from "../utils/config.js";

const usersRouter = express.Router();

// add new user info
usersRouter.post("/", async (request, response, next) => {
  if (METHOD_PASSWORD === request.headers.authorization) {
    const { username, password, email } = request.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return response.status(400).json({
        error: "username already taken",
      });
    }
    const passwordHash = await bcrypt.hash(password, Number(saltrounds));
    const user = new User({
      username,
      passwordHash,
      email,
      isLoggedIn: false,
    });
    try {
      const savedUser = await user.save();
      response.status(201).json(savedUser);
    } catch (error) {
      res.status(200).json(error.message);
    }
  } else {
    res.send("You do not have access to this address");
  }
});

// get user with user id
usersRouter.get("/:userId", async (req, res) => {
  res.send(await User.find({ username: req.params.userId }));
});

// change log inned acc isLoggedIn: false to true and vice versa
usersRouter.post("/:userId", async (req, res) => {
  if (METHOD_PASSWORD === req.headers.authorization) {
    const setIsLoggedIn = req.body.isLoggedIn;
    const userForChange = User.find({ username: req.params.userId });
    await userForChange.updateOne({ isLoggedIn: setIsLoggedIn });
    res.send(await User.find({ username: req.params.userId }));
  } else {
    res.send("You do not have access to this address");
  }
});

// delete user
usersRouter.delete("/:username", async (req, res) => {
  const deletedAcc = await User.deleteOne({ username: req.params.username });
  res.json(deletedAcc);
});

export default usersRouter;
