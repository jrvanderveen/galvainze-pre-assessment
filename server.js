// Dependencies
const path = require("path");
const express = require("express");

const morgan = require("morgan");
const colors = require("colors");
var http = require("http");

// Express
const app = express();
app.use(express.json());
app.use(morgan("dev"));

// If production build serve index.html from static path on startup
if ("production" === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));
}

// Set server listening port
const PORT = 5002;
app.listen(PORT, console.log(`Server running in production mode on port ${PORT}`.yellow.bold));
