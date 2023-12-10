const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.json");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(3001, (req, res) => {
  console.log("Port is working");
});
