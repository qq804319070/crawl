let read = require('./read');
let write = require('./write');
let async = require('async');
let url = 'http://top.baidu.com/buzz?b=26';
let Moive = require('../model').Movie;

async.waterfall([
        function (callback) {
            Moive.remove({},callback)
        },
        function (data,callback) {
            read(url, callback)
        },
        function (movies,callback) {
            console.log(movies);
            write(movies,callback)
        }
    ],
    function (err,result) {});




