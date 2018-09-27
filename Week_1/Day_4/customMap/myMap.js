var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


function map(inputAry, func){
  var result = [];
  for(var str of inputAry){

    result.push (func(str));
  }
  console.log(result);
}