// Require Express as a dependency
const express = require("express");

// declare express
const app = express();
const port = 4444;

app.listen(port, function (req, res) {
    console.log("Here to save the city.")
})

const superheroes = [
    {
        name: "Superman",
        powers: ["flight", "invulnerability", "x-ray vision"]
    },
    {
        name: "Wonder Woman",
        powers: ["lasso of truth", "strength", "speed"]
    },
    {
        name: "Black Panther",
        powers: ["senses", "reflexes", "healing"]
    },
];

const villains = [
    {
        name: "Lex Luthor",
        powers: ["super brain", "huge nerd"],
    },
    {
        name: "Ares",
        powers: ["shape shifting", "teleporting"],
    },
    {
        name: "Killmonger",
        powers: [
            "ability to fit in Black Panther's suit",
            "internet agreement that he looks badass",
        ],
    },
]

app.get("/superheroes", function (req, res) {
    res.send(superheroes)
})

// show route
app.get("/superheroes/:index", function (req, res) {
    res.send(`<h1>${superheroes[req.params.index].name}</h1> <br> <ul><li>${superheroes[req.params.index].powers[0]}</li><li>${superheroes[req.params.index].powers[1]}</li><li>${superheroes[req.params.index].powers[2]}</li></ul><br><h1>${villains[req.params.index].name}</h1> <br> <ul><li>${villains[req.params.index].powers[0]}</li><li>${villains[req.params.index].powers[1]}</li><li>${villains[req.params.index].powers[2]}</li></ul>`)
})

// show route

app.get("/villains", function (req, res){
    res.send(villains);
})

app.get("/villains/:indexOfVillains", function (req, res) {
    res.send(`<h1>${villains[req.params.indexOfVillains].name}</h1> <br> <ul><li>${villains[req.params.indexOfVillains].powers[0]}</li><li>${villains[req.params.indexOfVillains].powers[1]}</li><li>${villains[req.params.indexOfVillains].powers[2]}</li></ul>`)
})