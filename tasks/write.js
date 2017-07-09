let Move = require('../model').Movie;
function write(movies, callback) {
    Move.create(movies).then(callback)  //模型的所有方法都返回一个Promise
}
module.exports = write;