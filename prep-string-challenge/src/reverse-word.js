/* exported reverseWord */
function reverseWord(string){
  let array = [];
  let joined = "";
  for(let i = string.length - 1; i >= 0; i--){
    let char = string.charAt(i);
    array.push(char);
  }
  joined = array.join("")
  return joined;
}
