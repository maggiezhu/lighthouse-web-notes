var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err){
    throw error;
  })

  .on('response', function(response){
      console.log(response.statusMessage);
      console.log(response.headers['content-type']);
      console.log('downloading');
      console.log('completed');
  })

  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', function(){
    console.log('this is the end');
  });




