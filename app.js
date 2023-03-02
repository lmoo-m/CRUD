const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const appRoute = require("./src/routes/route");
app.use("/", appRoute);

app.listen(5000, () => console.log("server berjalan di port : 5000"));
