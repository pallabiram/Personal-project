const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;


// Public static path


const static_path = (path.join(__dirname, "../public"));

app.use(express.static(static_path));




// Routing

app.get("/" , (req , res) => {
    res.send("Pallabi Ram")
})

app.get("/about" , (req , res) => {
    res.send("Pallabi Ram")
})

app.get("/weather" , (req , res) => {
    res.send("Weather forecast")
})

app.get("*" , (req , res) => {
    res.send("404: Page not found")
})


app.listen(port , () => {
    console.log("listening to port at" ,{port})
})