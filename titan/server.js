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

// index route
app.get("/titan", function(req,res){
    res.send(titan)
})

app.get("/titan/:indexOfTitan", function(req, res){
    let info = req.params.indexOfTitan;
    res.send(`<h1>${titan[info].name}</h1><br><ul><li>Location: ${titan[info].location}</li>
    <li>Eye Color: ${titan[info].eyeColor}</li><li>Hair Color: ${titan[info].hairColor}</li></ul><style>
    body {
        background-image: url("https://images7.alphacoders.com/418/418724.png");
        color: white;
    }
    </style>`)
})
