//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Const em JS podem ser adicionados novo valores e mudar valores dos objetos (em arrays).
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    // To show the complete Date 
    const day = date.getDate();

    // To show only the day
    // const day = date.getDay(); 
    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {
    const item = req.body.newItem;

    console.log(req.body);

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        // Como funciona o envio de variáveis usando EJS:
        // Aqui ele redireciona para o get, porque o render é usado quando o código é carregado (por estar no método get)
        // logo precisa ser inicializado uma variável que for usada lá (no EJS) como vazio ou
        // com elementos já pré-dispostos, como feito na variável items
        // Declarada globalmente e pré-inserida com alguns valores
        res.redirect("/");
    }
});

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", (req, res) => {
    const item = req.body.newItem;
    console.log(item);
    workItems.push(item);
    res.redirect("/");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});