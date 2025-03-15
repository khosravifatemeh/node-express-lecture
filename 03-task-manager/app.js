const express = require("express");
const app = express();
const route = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
app.use(express.static("./public"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Task Manager App");
});
app.use("/api/v1/tasks", route);
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT | 8000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
