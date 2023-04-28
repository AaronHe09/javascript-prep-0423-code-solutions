/* exported capitalize */
function capitalize(string){
  let firstChar = string.charAt(0).toUpperCase();
  let restChars = string.slice(1).toLowerCase();
  let cap = firstChar + restChars;
  return cap;
}
