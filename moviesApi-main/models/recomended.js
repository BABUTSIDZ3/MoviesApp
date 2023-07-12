import mongoose from "mongoose";
import { setSchema } from "../utils/functions.js";


const recomendedSchema = new mongoose.Schema({
  title: { type: String, requred: true },
  date: { type: Number, requred: true },
  src: { type: String, requred: true },
  img: { type: String, requred: true },
});

setSchema(recomendedSchema);

export default mongoose.model("Recomended", recomendedSchema);
