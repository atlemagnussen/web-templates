const path = require('path');
const express = require('express');
const http = require('http');

// static server
const app = express();
var router = express.Router();
app.use(express.static(path.join(__dirname, 'web')));
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});
const server = http.createServer(app);
// api
router.get('/', function (req, res) {
    res.json({ message: 'This is the api' });
});

router.get('/config', function (req, res) {
    res.json("hey");
});

app.use('/api', router);
server.listen(8088, function listening() {
    console.log('Listening on %d', server.address().port);
});
