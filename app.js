const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();
const vacanciesRouter = require("./routes/api/vacancies/vacancies");
const candidatesRouter = require("./routes/api/candidates/candidates");
const authRouter = require("./routes/api/auth/auth");
const favoritesRouter = require("./routes/api/favorites/favorites");

// const { vacanciesRouter, candidatesRouter, authRouter, favoritesRouter } = require("./routes/api/");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors({
  origin: '*',
  // methods: ['POST', 'GET', 'DELETE', 'PUT', 'PATCH', 'HEAD', 'OPTIONS'],
  credentials: true,
}));
// app.use(cors());
// app.use(cors((req, res, next) => {
//   res.set({
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': '*',
//     'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT,OPTIONS'
//   })
// }))

app.use(express.json());

app.use("/api/v1/vacancies", vacanciesRouter);
app.use("/api/v1/candidates", candidatesRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/favorites", favoritesRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, _, res, __) => {
  res.status(500).json({ message: error.message });
});

module.exports = app;