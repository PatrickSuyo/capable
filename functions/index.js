const functions = require('firebase-functions');
const express = require('express');
const path = require('path');

const app = express();

// app.get('/signin', function (req, res) {
//     res.sendFile(__dirname + "/views/login.html")
//     // console.log(req.params)
// })

// app.get('/',(req, res)=> {
//     res.sendFile(__dirname + "/views/index.html")
// })

app.use(express.static(path.join(__dirname, '/')));

app.get('/signin', function (req, res) {
  res.sendFile(__dirname + "/views/login.html")
  // console.log(req.params)
})

app.get('/home', function (req, res) {
  res.sendFile(__dirname + "/views/home.html")
  // console.log(req.params)
})

app.get('/home-sec', function (req, res) {
  res.sendFile(__dirname + "/views/sec.html")
  // console.log(req.params)
})

app.get('/home-admin', function (req, res) {
  res.sendFile(__dirname + "/views/home-admin.html")
  // console.log(req.params)
})

app.get('/create', function (req, res) {
  res.sendFile(__dirname + "/views/createaccount.html")
  // console.log(req.params)
})

app.get('/villages', function (req, res) {
  res.sendFile(__dirname + "/views/villages.html")
  // console.log(req.params)
})
app.get('/residents', function (req, res) {
    res.sendFile(__dirname + "/views/residents.html")
    // console.log(req.params)
})

app.get('/:villageId', function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
    console.log(req.param.villageId)
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/views/index.html")
  console.log(req.param.villageId)
})



exports.app = functions.https.onRequest(app);
