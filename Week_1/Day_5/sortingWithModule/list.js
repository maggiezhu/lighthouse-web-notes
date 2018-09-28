/*
list.
*/
var aList = [];
function addtoList(number){
  aList.push(number);
}

function sortList(){
  var datalist = customSort(aList);
  return datalist;
}
function customSort(aList){
 return aList.sort();
}

module.exports = {
  'addtoList': addtoList,
  'sortList': sortList
};