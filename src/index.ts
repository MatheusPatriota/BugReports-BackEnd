import express from "express";

const app = express();
const routes = require("../src/routes/Rotas");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", routes);

// http://localhost:3000
app.listen(4001, () => {
  console.log("server is running");
});
