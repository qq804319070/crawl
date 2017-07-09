let express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express();
let Movie = require('./model').Movie;

app.set('view engine', 'html');
app.set('views', path.resolve('./views'));
app.engine('html',require('ejs').__express);

app.get('/', function (req, res) {
    Movie.find({}, function (err, movies) {
        res.render('index.html', {movies})
    })
})


app.listen(8080);
