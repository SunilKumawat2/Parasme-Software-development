const express = require("express");
const mongoose = require("mongoose");

const mongodb = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // console.log("Connected to Mongo Db Database");
    console.log("Connected to Mongo Db Database",process.env.MONGO_URL);
  })
  .catch(() => {
    console.log("not connected To Database");
  });

module.exports = mongodb;
