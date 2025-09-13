require('dotenv').config();
const express = require('express');
const {connect} = require('./config/db')
const PORT = process.env.PORT || 5000;

const app = express();
connect()
app.get("/", (req, res) =>{
    res.send({message: "Home Route"});
});

app.listen(PORT, () =>{
    console.log(`Server is Runing At PORT http://localhost:${PORT}/`);
    
})