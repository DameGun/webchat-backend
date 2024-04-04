import Sequelize from 'sequelize';
import dbConfig from './db.config.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.DIALECT,

    pool: dbConfig.POOL
});

async function connect() {
    try {
      await auth();
      console.log('Database connected successfully');
      await sync();
      console.log("Database synchronized successfully");
    } catch (error) {
      console.log(error.message);
    }
  }
  
  async function sync() {
    try {
      await sequelize.sync();
    } catch (error) {
      throw new Error("Failed to synchronize database: " + error.message);
    }
  }
  
  async function auth() {
    try {
      await sequelize.authenticate();
    } catch (error) {
      throw new Error("Unable to connect to database: " + error.message);
    }
  }
  
export { sequelize as db, connect };