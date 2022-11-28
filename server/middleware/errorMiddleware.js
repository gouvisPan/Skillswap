const AppError = require("../utils/appError");

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const handleJWTerror = () =>
  new AppError("Invalid token, please login again", 401);

const handleJWTExpirederror = () =>
  new AppError("Expired token, please login again", 491);

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error(err);

    res.status(500).json({
      status: error,
      message: "Something went wrong!",
    });
  }
};
const handleDBDublicateError = (err) => {
  const value = err.errmsg.match(/(['"])(?:(?!\1|\\).|\\.)*\1/)[0];

  const message = `Dublicate field :${value}. Please use another value!`;

  return new AppError(message, 400);
};

const handleDBCastError = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else {
    let error = { ...err };
    if (error.name === "CastError") error = handleDBCastError(error);
    if (error.code === 11000) error = handleDBDublicateError(error);
    if (error.name === "JsonWebTokenError") error = handleJWTerror();
    if (error.name === "TokenExpiredError") error = handleJWTExpirederror();

    sendErrorProd(err, res);
  }
};
