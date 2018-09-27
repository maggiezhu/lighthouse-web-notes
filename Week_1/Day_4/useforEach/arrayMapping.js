var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(z){ return Math.sqrt(Math.pow(z.x,2) + Math.pow(z.y,2));/* Your code here */});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);





/*
Have to have return inside of the call-back function for map, because we are storing the returned value!





*/