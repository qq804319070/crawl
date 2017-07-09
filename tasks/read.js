let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');

module.exports = function (url, callback) {
    request({url, encoding: null}, function (err, res, body) {
        if (!err && res.statusCode === 200) {
            body = iconv.decode(body, 'gbk');
            let $ = cheerio.load(body);
            let movies = [];
            //迭代所有a标签
            $('.keyword a.list-title').each(function (index, item) {
                let $this = $(item);
                let movie = {
                    name: $this.text(),
                    url: $this.attr('href')
                };
                movies.push(movie)
            });
            callback(err, movies)
        }

    })
};


