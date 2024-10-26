// config/index.js
const dotenv = require("dotenv");

dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
};

const auth0config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: "http://localhost:3000",
  clientID: "G3PwPaa8uc5V3esxYRJOEShQfUEmmO8m",
  issuerBaseURL: "https://dev-52hzpb88agwmb6zx.us.auth0.com",
  secret: "LONG_RANDOM_STRING",
};

module.exports = { config };
