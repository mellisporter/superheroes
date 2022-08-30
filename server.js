// Require Express as a dependency
const express = require("express");

// declare express
const app = express();
const port = 4444;

app.listen(port, function(req, res){
    console.log("Here to save the city.")
})
