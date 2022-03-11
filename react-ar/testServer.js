var fs = require('fs'),
  https = require('https'),
  express = require('express'),
  app = express(),
  cors = require('cors'),
  path = require('path')

https.createServer({
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem')
}, app).listen(5100);

app.get('/', cors(), (req, res) => {
  res.send('Hello World!');
});

app.get('/foot', function (req, res) {
  var options = {
    root: path.join(__dirname, "src")
  };

  var fileName = 'foot.glb';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});
