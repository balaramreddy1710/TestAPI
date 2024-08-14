const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(logger);

const userRoute = require("./routes/users");

app.use("/users", userRoute);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
