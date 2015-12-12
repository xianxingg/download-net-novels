var gs = require('nodegrass');
gs.get('http://www.jd.com', function(data){
  console.log(data);
}, 'gbk').on('error', function(err){
  console.log(err);
});
