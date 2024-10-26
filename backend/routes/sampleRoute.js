// routes/exampleRoutes.js
const express = require("express");
const { getHelloWorld } = require("../controllers/exampleController");

const router = express.Router();

router.get("/", getHelloWorld);

module.exports = router;
