let mongoose = require('mongoose');
mongoose.Promise = Promise;
let conn = mongoose.createConnection('mongodb://127.0.0.1/crawl');

exports.Movie = conn.model('Movie', new mongoose.Schema({
    name: String,
    url: String
}));
