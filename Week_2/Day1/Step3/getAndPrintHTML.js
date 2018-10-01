var https = require('https');
var buffer = '';
function getAndPrintHTML(options){

  https.get(options, function(response){
    response.on('data',function(data){
      buffer+= data;
    });
    response.on('end',function(){
      console.log(buffer);
    });


  });

}
 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
getAndPrintHTML(requestOptions);