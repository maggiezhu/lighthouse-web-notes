var getHTML = require('./http-functions.js');
var leet = {
  a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'
};
function printReverse(buffer){
  var a = leetspeak(buffer);

  console.log(leetspeak(buffer,leet));
}




function leetspeak(buffer, leet){
  var newstr = '';
  for(var i of buffer){
// Use String.replace(a,b) to change the strings
    for (var j in leet){

      if(i === j){

        newstr +=leet[j];
      }else{
        newstr+=i;
      }
    }
  }

  return newstr;


}




var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};
getHTML.getHTML(requestOptions, printReverse);

