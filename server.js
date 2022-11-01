const express = require('express');
const db = require('./database');

// import * as data from './db'
const app = express();
const port = 8080


app.get('/', (req, res) => {
  res.send(db)
})
app.get('/products', (req, res) => {
    res.send(db.products)
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id
    const product = db.products.find(product => product.id === id)
    res.send(product)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})