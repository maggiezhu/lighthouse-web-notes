
function getHTML(options,callback){
  var https = require('https');
  var buffer = '';
  https.get(options, function(response){
    response.on('data',function(data){
      buffer+= data;
    });
    response.on('end',function(){
      callback(buffer);
    });


  });

}

function printHTML(buffer){
  console.log(buffer);

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML);