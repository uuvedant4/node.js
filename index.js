const express = require("express");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");

const app = express();

const PORT = 5000;
const hostname = "localhost";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);
app.use("/api/v1/", router);

app.listen(PORT, () =>
  console.log(`Server is running at http://${hostname}:${PORT}/`)
);
