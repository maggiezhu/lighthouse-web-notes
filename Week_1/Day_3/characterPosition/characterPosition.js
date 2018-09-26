var input = process.argv[2];
function countletters(inputString){
  var length = inputString.length;
  var letters = {};
  for(var i = 0; i < length; i++){

    if(inputString[i] in letters){

      letters[inputString[i]].push(i);
    }else if (inputString[i] === ' ') {
    }
    else{
      letters[inputString[i]] = [];
      letters[inputString[i]].push(i);
    }
  }
  return letters;
}
console.log(countletters(input));

