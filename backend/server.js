// server.js
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { config } = require("./config");
const errorHandler = require("./middleware/errorHandler");
const exampleRoutes = require("./routes/sampleRoute");
const allData = require("./routes/getAllData");
const app = express();

// Middleware
app.use(helmet()); // Security
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
// Routes
app.use("/", exampleRoutes);
app.use(allData);

// Error handling middleware
app.use(errorHandler);
// Start the server
app.listen(config.PORT, () => {
  console.log(
    `Server is running in ${config.NODE_ENV} mode on http://localhost:${config.PORT}`
  );
});
