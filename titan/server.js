const express = require("express");
const app = express();
const port2 = 3333;

app.listen(port2, function(){
    console.log("Protect the walls!")
})

const titan = [
    {
        name: "Eren",
        location: "Shiganshina",
        eyeColor: "brown",
        hairColor: "brown",
    },
    {
        name: "Armin",
        location: "Wall Rose",
        eyeColor: "blue",
        hairColor: "blonde"
    },
    {
        name: "Mikasa",
        location: "Shiganshina",
        eyeColor: "gray",
        hairColor: "black",
    },
]

app.get("/titan", function(req,res){
    res.send(titan)
})
