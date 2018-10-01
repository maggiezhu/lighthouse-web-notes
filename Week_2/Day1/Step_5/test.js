var getHTML = require('./http-functions');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(buffer){
  console.log(buffer);

}


getHTML.getHTML(requestOptions,printHTML);