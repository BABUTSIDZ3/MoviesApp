import mongoose from "mongoose";
import { setSchema } from "../utils/functions.js";

const userSchema = new mongoose.Schema({
  username: { type: String, requred: true },
  email: { type: String, requred: true },
  passwordHash: { type: String, requred: true },
  isLoggedIn: Boolean,
});

setSchema(userSchema);

export default mongoose.model("User", userSchema);
