var getHTML = require('./http-functions.js');

function printReverse(buffer){
  buffer.split(' ').reverse().join();
  console.log(buffer);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};
getHTML.getHTML(requestOptions, printReverse);

