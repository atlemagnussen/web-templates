const path = require('path');
const express = require('express');
const http = require('http');

// static server
const app = express();
var router = express.Router();
app.use(express.static(path.join(__dirname, 'web')));
const server = http.createServer(app);

// api
router.get('/', function (req, res) {
    res.json({ message: 'This is the api' });
});

router.get('/config', function (req, res) {
    res.json("hey");
});

app.use('/api', router);
server.listen(666, function listening() {
    console.log('Listening on %d', server.address().port);
});
