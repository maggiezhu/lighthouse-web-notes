var getHTML = require('./http-functions.js');


function printLowerCase(buffer){
  console.log(buffer.toLowerCase());
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};
getHTML.getHTML(requestOptions, printLowerCase);

