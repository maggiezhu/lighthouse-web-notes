mymodule = require('./list.js');
console.log(mymodule);
mymodule.addtoList(3);
mymodule.addtoList(4);
mymodule.addtoList(1);
mymodule.addtoList(2);

mymodule.addtoList(5);

var orderedList = mymodule.sortList();
console.log(orderedList);