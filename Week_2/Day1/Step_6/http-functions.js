module.exports.getHTML = function(options,callback){
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
};


