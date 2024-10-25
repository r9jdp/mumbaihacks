// routes/exampleRoutes.js
const express = require("express");
const { getUser } = require("../controllers/authenticationController");

const router = express.Router();

router.post("/authenticate", getUser);

module.exports = router;
