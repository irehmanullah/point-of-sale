import express from "express";
import dotenv from "dotenv";

import DB from "./config/db.js";

import userRoute from "./routes/user.route.js";

dotenv.config();

// connect to Database
DB(process.env.MONGO_URI);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("connected");
});

// register routes
app.use("/users", userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening the port http://localhost:" + port);
});
