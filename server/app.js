const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const express = require("express");
const userRoute = require("./routes/userRoute");
const mentorshipRoute = require("./routes/mentorshipsRoute");
const resourceRoute = require("./routes/resourcesRoute");
const messageRoute = require("./routes/messagesRoute");
const taskRoute = require("./routes/taskRoute");
const skillsRoute = require("./routes/skillsRoute");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./middleware/errorMiddleware");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const app = express();

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Request limit per IP exceeded, please try again in one hour",
});

//Middlewares
app.use(cors());

//SECURITY
app.use(helmet());
app.use("/api", limiter);

//UTILITY
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
app.use(bodyParser.json());

//DATA SANITIZATION
app.use(mongoSanitize());
app.use(xss());

//PARAMETER POLUTION PREVENTION
app.use(hpp({ whitelist: [] }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//ROUTE
app.use("/api/v1/users", userRoute);
app.use("/api/v1/mentorships", mentorshipRoute);
app.use("/api/v1/resources", resourceRoute);
app.use("/api/v1/messages", messageRoute);
app.use("/api/v1/tasks", taskRoute);
app.use("/api/v1/skills", skillsRoute);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Server cant find this route:  ${req.originalUrl}`,
  });
});

app.use(globalErrorHandler);
module.exports = app;
