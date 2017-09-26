var express = require('express');
var app = express();
// var index = require('./routes/index.js');
// require path in index.js!

//middleware
app.use(express.static('public'));

app.listen(4000, function(){
    console.log('Listening on port 4000');
});

