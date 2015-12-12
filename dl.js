var cheerio = require('cheerio');
var gs = require('nodegrass');

var url = "http://www.bxwx.org/b/57/57181/8845915.html";

gs.get(url, function(data){
  var $ = cheerio.load(data);
  console.log($('#title').text());
  console.log($('#content').text());
}, 'gbk').on('error', function(err){
  console.log(err);
});
