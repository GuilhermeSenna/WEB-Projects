//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Chamado após o usuário apertar o botão, ativando o post
app.post("/", function(req, res) {
    const query = req.body.cityName; // Recebe o input do usuário do HTML
    const apiKey = ""; // Insert your Api Key Here, Mine was removed for security
    const units = "metric";
    const url = // Guardar o link personalizado, ao qual depende da cidade digitada pelo usuário
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        query +
        "&appid=" +
        apiKey +
        "&units=" +
        units;
    // Requisição para algum servidor externo
    https.get(url, function(response) {
        // Checa se há dados retornados da requisição
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<p>The is currently " + desc + "</p>");
            res.write(
                "<h1>The temperature in " +
                query +
                " is " +
                temp +
                " degrees Celcius.</h1>"
            );
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});