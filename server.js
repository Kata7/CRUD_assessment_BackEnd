const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const environment = process.env.port || 'development'
const config = require('./knexfile.js')[environment]
const knex = require('knex')(config)
const port = 8000

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res, next) => {
  const obj = {
    message: 'yeet'
  }
  res.status(200).send(JSON.stringify(obj))
})


app.listen(port, () => {
  console.log('Servers is running on port:', port)
})