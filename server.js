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

app.disable('x-powered-by');


app.get('/', (req, res, next) => {
  knex('students')
  .then((rows) => res.status(200).send(rows))
  .catch(err => {
    next(err)
  })
})

app.post('/', (req, res, next) => {
  knex('students')
  .insert({name: 'yeet', gpa: 2.00})
  .then(() => res.status(200).send('post successful'))
  .catch(err => {
    next(err)
  })
})

app.patch('/', (req, res, next) => {
  // res.send('patch')
  res.send(req.body)
})

app.delete('/:id', (req, res, next) => {
  const id = req.params.id
  knex('students')
  .where({ id: id })
  .delete()
  .then(() => res.status(200).send('student deleted'))
  .catch(err => {
    next(err)
  })
})


// Official Error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack)
// })


// G-School method
app.use((req, res, next) => {
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log('Servers is running on port:', port)
})