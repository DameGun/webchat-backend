import env from "dotenv";

env.config();

export default {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: "webchat_db",
  PORT: process.env.DB_PORT,
  DIALECT: "postgres",
  POOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
