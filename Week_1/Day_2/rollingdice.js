dicenum = process.argv[2];
dicenum = Number(dicenum);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function rolldice(dicenum){
  var ary = [];
  for(var i = 0; i < dicenum; i++){

    var num = getRandomInt(5) + 1;
    ary.push(num);
  }
  return ary;
}
console.log(rolldice(dicenum).join());
