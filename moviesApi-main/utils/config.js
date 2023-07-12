import dotenv from "dotenv";

dotenv.config();
const { PORT, MONGODB_URI, METHOD_PASSWORD, saltrounds, SECRET } = process.env;

export { PORT, MONGODB_URI, METHOD_PASSWORD, saltrounds, SECRET };
