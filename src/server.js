const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.status(200).send({ message: "api is working fine" });
});

app.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
