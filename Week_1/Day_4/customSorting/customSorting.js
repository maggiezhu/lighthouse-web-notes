var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function customSort(obj1,obj2){
// bc sort takes a compare function with only two arguments
 //why can't use sort in here to sort the entire array first
  if(obj1.name === obj2.name){
    return obj1.age - obj2.age;
  }else {
    return obj1.name.localeCompare(obj2.name); //how else i can compare strings
  }
}

console.log(students.sort(customSort));

