import express from "express";
import path from "path";
import { eventEmitter } from "./examples/eventEmitter";

require("dotenv").config();

const app = express();
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  eventEmitter.emit("file", "index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
  eventEmitter.emit("file", "about.html");
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact-me.html"));
  eventEmitter.emit("file", "contact-me.html");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/404.html"));
  eventEmitter.emit("file", "404.html");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
