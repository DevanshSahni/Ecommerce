const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cookieParser=require("cookie-parser");
require('dotenv').config();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());

mongoose.connect(
  `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.152cqw3.mongodb.net/ecommerce`
);

app.use("/", routes);

app.listen(3001, (req, res) => {
  console.log("Port is working");
});
