//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res) {
    res.sendfile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of calculation is " + result);
});

app.post("/bmiCalculator", function(req, res) {
    var w = Number(req.body.w);
    var h = Number(req.body.h);

    var bmi = w / Math.pow(h, 2);
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});