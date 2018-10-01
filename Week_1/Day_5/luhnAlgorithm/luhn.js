
function myluhn(str){ //account number passed to this function is see as string
  var sumarr = [];
  var length = str.length;
  var sum = 0;
  for(var i = length; i>0; i--){
    //all odd number digit double
    if(i%2 === 1){
      sumarr.push(str[i] * 2 - 9);
    }else{
      sumarr.push(str[i]);
    }
  }
  for(var j in sumarr){
    sum += sumarr[i];
  }
  if(sum % 10 === 0){
    return true;
  }else{
    return false;
  }

}

//Write test functions!