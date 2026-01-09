const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const app = express();

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
  message: "Too many request from this IP, Please try again later",
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Temporarily comment out xss-clean to fix the error
// app.use(xssClean());

app.get("/test", rateLimiter, (req, res) => {
  res.status(200).send({ message: "api testing is working fine" });
});

app.get("/api/user", (req, res) => {
  res.status(200).send({
    message: "user profile is returned",
  });
});

//client error handling
app.use((req, res, next) => {
  next(createError(404, "Route not found!"));
});

//server error handling- all the errors
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
