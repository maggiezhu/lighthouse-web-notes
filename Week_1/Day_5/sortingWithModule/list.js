/*
list.
*/
var aList = [];
function addtoList(number){
  aList.push(number);
}

function sortList(){
  var datalist = aList.sort(customSort);
  return datalist;
}
function customSort(num1,num2){
// bc sort takes a compare function with only two arguments
 //why can't use sort in here to sort the entire array first
    return num1 - num2;
}

module.exports = {
  'addtoList': addtoList,
  'sortList': sortList
};