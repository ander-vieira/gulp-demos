var express = require('express');
var app = express();

var demos = require('./demos.json');

demos.forEach(function(demo) {
  app.use('/'+demo, express.static(__dirname+'/'+demo+'/public'));
});

app.get('/', function(req, res) {
  var html = '<html><body>';
  demos.forEach(function(demo) {
    html += '<p><a href="/'+demo+'">'+demo+'</a></p>';
  });
  html += '</body></html>';
  res.send(html);
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
})
