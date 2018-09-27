// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
// do i have to keep track or does forEach able to provide the current index too?

  arr.forEach(
    function(name,i) {if (name === "Waldo") { //name is each element in the array, i is the index of it, then pass these to function
      console.log('I found it');
      found(i);   // execute callback
    }
  }
  );
}

function actionWhenFound(index) {
  console.log(index);
  console.log(`Found him at index ${ index }!`); // why is this not working?
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);