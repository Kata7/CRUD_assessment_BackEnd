const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const environment = process.env.port || 'development'
const config = require('./knexfile.js')[environment]
const knex = require('knex')(config)

const port = 8000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res, next) => {
  knex('students')
  .then((rows) => res.status(200).send(rows))
  .catch(err => {
    next(err)
  })
})

app.post('/', (req, res, next) => {
  res.send('post')
})

app.patch('/', (req, res, next) => {
  res.send('patch')
})

app.delete('/', (req, res, next) => {
  res.send('delete')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log('Servers is running on port:', port)
})