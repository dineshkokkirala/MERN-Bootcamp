require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const mongoURI = config.get("mongoURI");
mongoose
  .connect(process.env.DATABASE, {
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

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const port = 8000 || process.env.PORT;

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
