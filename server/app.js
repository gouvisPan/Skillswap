const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware");
const userRoute = require("./routes/userRoute");
const cookieParser = require("cookie-parser");

const app = express();

//Middlewares

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Route Middlewaren
app.use("/api/v1/users", userRoute);

app.use(errorHandler);
module.exports = app;
