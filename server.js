// Require Express as a dependency
const express = require("express");

// declare express
const app = express();
const port = 4444;

app.listen(port, function(req, res){
    console.log("Here to save the city.")
})

const superheroes = [
    {
        name:"Superman",
        powers: ["flight" , "invulnerability" , "x-ray vision"]
                        } ,
    {
        name: "Wonder Woman" ,
        powers: ["lasso of truth" , "strength", "speed"]
                        },
    {
        name: "Black Panther",
        powers: ["senses" , "reflexes", "healing"]
                        }
];

app.get("/superheroes", function (req, res){
    res.send(superheroes)
})

// show route
app.get("/superheroes/:index", function (req, res){
    res.send(`<h1>${superheroes[req.params.index].name}</h1> <br> <ul><li>${superheroes[req.params.index].powers[0]}</li><li>${superheroes[req.params.index].powers[1]}</li><li>${superheroes[req.params.index].powers[2]}</li></ul>`)
})
