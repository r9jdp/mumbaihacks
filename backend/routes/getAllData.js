// routes/exampleRoutes.js
const express = require("express");
const { getUserData } = require("../controllers/dataController");
const { DataExtraction } = require("../controllers/completeUserData");

const router = express.Router();

router.post("/authenticate", getUserData);
router.post("/getData", DataExtraction);

module.exports = router;
