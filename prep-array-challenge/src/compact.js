/* exported compact */
var input = [1, 'a', {}, [], true];

function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const bool = !!array[i];

    if (bool === true) {
      newArray.push(array[i]);
    } else {
      continue;
    }
  }
  return newArray;
}

console.log(compact(input));
