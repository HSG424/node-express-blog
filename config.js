require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dbOptions: process.env.DB_OPTIONS,
};
