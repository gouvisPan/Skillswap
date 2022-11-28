const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app.js");

const PORT = process.env.PORT || 3000;

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught exception! Shutting down the server...");
  process.exit(1);
});

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    const server = app.listen(PORT, () =>
      console.log("Running on port: " + PORT)
    );
  })
  .catch((err) => {
    console.log(err);
  });

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection! Shutting down the server...");
  server.close(() => {
    process.exit(1);
  });
});
