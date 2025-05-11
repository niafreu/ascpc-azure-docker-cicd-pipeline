const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Welcome to your ASCPC web app!')
})

app.get('/u89jg3own984hoenrdbf0eirhonbdf', (req, res) => {
  var a = process.env
  res.send('lala' + a)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
