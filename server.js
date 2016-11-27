const app = require('express')();


const notify = require('./notify');

app.use(require('body-parser').json());

app.post('/payload', function(req, res) {
    notify(req.body);
    res.send('ok');
});

app.listen(3333);