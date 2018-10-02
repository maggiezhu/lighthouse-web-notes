var https = require('https');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};


var callback = function(response){

  console.log('in callback function');
  response.on('data', function(chunk){
  console.log('In coming data' + chunk);
  });

};

req = https.request(options,callback);
req.end();

console.log('last line');