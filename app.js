const express = require("express");
const mongoose = require("mongoose");

const { port, env, user, password, dbOptions } = require("./config");

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = `mongodb+srv://${user}:${password}${dbOptions}`;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    })
  )
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));

// routes
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
