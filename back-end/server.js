import express from "express";
import dotenv from "dotenv";

import DB from "./config/db.js";

dotenv.config();

// connect to Database
DB(process.env.MONGO_URI);

const app = express();

app.get("/", (req, res) => {
  res.send("connected");
});

app.get("/test", (req, res) => {
  res.send("test");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening the port http://localhost:" + port);
});
