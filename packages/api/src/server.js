const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const { config } = require("./config");
const { userRouter } = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.client.url,
  }),
);

app.use(userRouter);

module.exports = {
  app: app,
};
