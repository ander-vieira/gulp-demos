var express = require('express');
var app = express();

var demos = require('./demos.json');

demos.forEach(function(demo) {
  app.use('/'+demo, express.static(__dirname+'/'+demo+'/public'));
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
})
