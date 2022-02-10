const express = require('express');
const products = require('./routes/products');
const mongoose = require('mongoose');
const parser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/deneme', {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection

db.on('error', err => console.log(err));

const app = express();

app.use(parser.json())

app.use('/products', products);


app.get('/', (req, res) => {

    res.send("Deneme")
})
app.listen(5000)