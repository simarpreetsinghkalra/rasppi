// const express = require('express');
// const fs = require('fs');
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

// const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.send('Hello');
});

app.post("/changeLedStatus", function (req, res) {
  console.log(req.body);
  let rawdata = fs.readFileSync('led.json');
  let ledStatus = JSON.parse(rawdata);
  console.log(ledStatus);
  res.contentType('appliction/json');
  const resp = {

  };
  res.send(req.body);
});
app.listen(process.env.PORT || 3000, function () {
  console.log('server started on port 3000');
});