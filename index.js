// For usage with keybr.com

var express = require("express");
var wtf = require("wtf_wikipedia");
var app = express();

const port = 2222;

app.get("/", (req, res) => {
    var fulltext = "";
    wtf.random().then(doc => {
        var sentences = doc.sentences();
        sentences.forEach(val => {
            fulltext += val.text() + " ";
        });
        res.set("content-type", "text/plain");
        res.send(fulltext);
    });
});

app.listen(port, () => console.log("Ready"));