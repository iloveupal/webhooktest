var app = require('express')();

app.use(require('body-parser').json());

app.post('/payload', function(req, res) {
    console.log(req.body);
    res.send('ok');
});

app.listen(3333);