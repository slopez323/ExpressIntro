const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Sarah')
})

app.get('/error301', (req, res) => {
    res.status(301).send('Error 301')
})

app.get('/error409', (req, res) => {
    res.status(409).send('Error 409')
})

app.get('*', (req, res) => {
    res.status(404).send('Error 404: Route not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})