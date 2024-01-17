require("dotenv").config();
const connect = require("./config/dbconnection");
const express = require("express");
const cors = require("cors");
const Router = require("./routes/Router");
const app = express();
app.use(express.json());
app.use(express.static("uploads"));
app.use(cors());



// Routes
app.use("/parasme/api",Router);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
