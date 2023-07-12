import mongoose from "mongoose";
import { setSchema } from "../utils/functions.js";


const movieSchema = new mongoose.Schema({
  title: { type: String, requred: true },
  date: { type: Number, requred: true },
  src: { type: String, requred: true },
  img: { type: String, requred: true },
});

setSchema(movieSchema);

export default mongoose.model("movie", movieSchema);
