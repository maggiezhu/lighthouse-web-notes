const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
function printItems(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}
printItems(array)