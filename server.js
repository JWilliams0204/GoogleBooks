const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const Book = require("./models/book");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/googlebooks");
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });