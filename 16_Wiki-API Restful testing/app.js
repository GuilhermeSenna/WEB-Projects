//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

const articlesSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articlesSchema);

/////////////////////////////////////Resquests tragetting all Articles///////////////////

app.route("/articles")

.get((req, res) => {
    Article.find((err, foundArticles) => {
        if (!err) {
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
})

.post((req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Succesfully added.");
        }
    });
})

.delete((req, res) => {
    Article.deleteMany((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Deleted all the files");
        }
    });
});

/////////////////////////////////////Resquests tragetting A specific Article///////////////////

app.route("/articles/:articleTitle")

.get((req, res) => {
    Article.findOne({ title: req.params.articleTitle }, (err, foundArticle) => {
        if (err) {
            console.log(err);
        } else {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("No articles matching that title was found.");
            }
        }
    });
})

.put((req, res) => {
    Article.update({ title: req.params.articleTitle }, { title: req.body.title, content: req.body.content }, { overwrite: true },
        (err) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Succesfully overwrited");
            }
        });
})

.patch((req, res) => {
    Article.update({ title: req.params.articleTitle }, { $set: req.body }, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Succesfully overwrited specific");
        }
    });
})

.delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Succesfully deleted specific");
        }
    });
});


app.listen(3000, () => {
    console.log("Server started on port 3000");
});