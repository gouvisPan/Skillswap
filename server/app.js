const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const express = require("express");
const userRoute = require("./routes/userRoute");
const mentorshipRoute = require("./routes/mentorshipsRoute");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./middleware/errorMiddleware");
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
app.use("/api/v1/mentorships", mentorshipRoute);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Server cant find this route:  ${req.originalUrl}`,
  });
});

app.use(globalErrorHandler);
module.exports = app;
