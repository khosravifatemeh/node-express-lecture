const express = require("express");
const app = express();
const route = require("./routes/tasks");
// middleware
app.use(express.json());
// routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});
app.use("/api/v1/tasks", route);
const port = 8080;
app.listen(port, console.log(`Server is listening on port ${port}...`));
