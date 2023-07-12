import mongoose from "mongoose";
import { setSchema } from "../utils/functions.js";

const serialSchema = new mongoose.Schema({
  title: { type: String, requred: true },
  date: { type: Number, requred: true },
  series: { type: Array, requred: true },
  img: { type: String, requred: true },
});
setSchema(serialSchema);

export default mongoose.model("serial", serialSchema);
