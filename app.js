const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const api = require('./routes/api')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', api)
app.get('/', (req, res) => {
  res.status(201).json({
    message: 'Hello'
  })
})
// server
app.listen(PORT, () => {
  console.log(`Connected! on port ${PORT}`)
})