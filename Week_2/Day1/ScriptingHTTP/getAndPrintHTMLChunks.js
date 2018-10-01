var https = require('https');

function getAndPrintHTMLChunks(){
    //define the url we want to get from

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

  // https.get to stream
    https.get(requestOptions, function(response){
      response.setEncoding('utf8');
      //log data when received
      response.on('data', function(data){
        console.log(data + '/n');
      });
      response.on('end',function(){
        console.log('Response Stream Complete.');
      });
    });
}

getAndPrintHTMLChunks();

