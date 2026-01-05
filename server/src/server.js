const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.status(200).send({ message: "api testing is not working fine" });
});

app.post("/test", (req, res) => {
  res
    .status(200)
    .send({ message: "post method api testing is not working fine" });
});

app.put("/test", (req, res) => {
  res
    .status(200)
    .send({ message: "put method api testing is not working fine" });
});

app.delete("/test", (req, res) => {
  res
    .status(200)
    .send({ message: "delete method api testing is not working fine" });
});

app.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
