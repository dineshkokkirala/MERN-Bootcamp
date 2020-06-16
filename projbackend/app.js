require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

const mongoURI = config.get("mongoURI");
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MONGODB CONNECTED...");
  })
  .catch(() => {
    console.log("DB Connection failed");
  });

const port = 8000 || process.env.PORT;

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
