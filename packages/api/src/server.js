const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const { config } = require("./config");
const { userRouter, postRouter } = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: config.client.url,
  }),
);

app.use(userRouter);
app.use(postRouter);

module.exports = {
  app: app,
};
