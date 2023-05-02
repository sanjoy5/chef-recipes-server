const express = require('express')
const app = express()
const chefs = require('./data/chefs.json')
var cors = require('cors')
const port = 5000
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server Side is Running...')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const selectedChef = chefs.filter(chef => chef.id === id)
    res.send(selectedChef)
})


app.listen(port, () => {
    console.log('App is listening on port : ', port);
})