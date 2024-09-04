import dotenv from "dotenv";
dotenv.config();

export const ENV_VARS = {
  MONGO_DB_URI:process.env.MONGO_DB_URI ,
  PORT:process.env.PORT || 5000,
}