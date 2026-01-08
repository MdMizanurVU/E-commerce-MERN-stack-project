const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.user = { id: 101 };
    next();
  } else {
    return res.status(401).json({ message: "Please login first" });
  }
};

app.get("/test", (req, res) => {
  res.status(200).send({ message: "api testing is not working fine" });
});

app.get("/api/user", isLoggedIn, (req, res) => {
  console.log(req.user.id);
  res.status(200).send({
    message: "user profile is returned",
  });
});

app.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
