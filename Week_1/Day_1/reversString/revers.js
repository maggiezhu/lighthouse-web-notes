input = process.argv;
inputlength = input.length;
input = input.slice(2, inputlength);
function reverse(input){
  ary = [];

  for(var word of input){

    var str = '';
    var stringlength = word.length;
    // console.log('stringlength',stringlength);
    for(var j = stringlength - 1; j>=0; j--){
      str+=word[j];
    }
     ary.push(str);
  }
  for(var k = 0; k< ary.length; k++)
  console.log(ary[k]);
}
reverse(input);

// function reverse(input){
//   str = input.split(' ');
//   i = str.length;
//   for(var j = 0; j<i;j++){
//     len = str[i].length;
//     var string1 = '';
//     for(var k = len; k>0;k--);

//       string1 += str[i][j];
//     }
//     console.log(string1);
//   }
// }