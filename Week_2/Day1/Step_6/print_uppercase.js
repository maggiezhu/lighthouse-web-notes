var getHTML = require('./http-functions.js');

function printUpperCase(buffer){
  console.log(buffer.toUpperCase());
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};
getHTML.getHTML(requestOptions, printUpperCase);


