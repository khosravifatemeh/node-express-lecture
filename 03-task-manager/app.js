const express = require("express");
const app = express();
const route = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
// middleware
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});
app.use("/api/v1/tasks", route);
const port = 8080;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
