const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Middle ware
app.use(cors());
app.use(express.json());

// database connection
require("./database/connect");

// async function error
async function run() {
    try {



} finally {
    // await client.close();
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
    res.send("Hello app responding!");
  });
//   server listening port
  app.listen(port, () => {
    console.log(`Hello app listening on port ${port}`);
  });
  