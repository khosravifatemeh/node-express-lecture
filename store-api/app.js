require("dotenv").config();
require("express-async-errors");
// async errors

const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1> <a href='/api/v1/products'>products route</a>");
});
const productRouter = require("./routes/products");
app.use("/api/v1/products", productRouter);
const connectDB = require("./db/connect");
// products route
app.use(notFoundMiddleware);
app.use(notFoundMiddleware);
const port = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening to ${port}`));
  } catch (error) {}
};

start();
