const env = require("./env");
const express = require("express");

const app = express();

app.use("/api", require("api"));

app.listen(+env.port);
