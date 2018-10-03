var fs = require('fs');
var path = process.argv[2];

fs.readFile(path,function(err, data){
  if(err){
    return console.error(err);
  }
  console.log('asynchoronous' + data);
});

console.log('this line should print before the file data');