if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// npm i -g npm-check-updates
// ncu -u
// npm install

const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");


// Routes
const homeRouter = require("./routes/home");

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .then(console.log("⚡️[Database]: connected"))
  .catch((err) => console.log(err));

mongoose.set("strictQuery", false);

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);


const port = 4000;
app.listen(port, () => {
  console.log(`⚡️[server]: listening to port ${port}`);
});
