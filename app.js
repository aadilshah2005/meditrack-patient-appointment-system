require('dotenv').config();
const { log } = require('console');
const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();


app.get("/", (req, res) =>{
    res.send({message: "Home Route"});
});

app.listen(PORT, () =>{
    console.log(`Server is Runing At PORT http://localhost:${PORT}/`);
    
})