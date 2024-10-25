// config/index.js
const dotenv = require("dotenv");

dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
};

module.exports = config;
