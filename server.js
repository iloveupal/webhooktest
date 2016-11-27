var app = require('express')();

var prettyjson = require('prettyjson');

app.use(require('body-parser').json());

app.post('/payload', function(req, res) {
    console.log(prettyjson.render(req.body));
    res.send('ok');
});

app.listen(3333);