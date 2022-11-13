const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = require("./app.js");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(PORT, () => console.log("Running on port: " + PORT));
  })
  .catch((err) => {
    console.log(err);
  });

//2:48
