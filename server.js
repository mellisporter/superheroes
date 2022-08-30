// Require Express as a dependency
const express = require("express");

// declare express
const app = express();
const port = 4444;

app.listen(port, function(req, res){
    console.log("Here to save the city.")
})

const superheroes = ["Superman" , "Wonder Woman", "Black Panther"];

app.get("/superheroes", function (req, res){
    res.send(superheroes)
})

app.get("/superheroes/:index", function (req, res){
    res.send(superheroes[req.params.index])
})
