/* exported isLowerCased */
function isLowerCased(string){
  let bool = true;

  for(let i = 0; i < string.length; i++){
    if(string.charAt(i) !== string.charAt(i).toLowerCase()){
      return bool = false;
    }
    if(bool === false){
      break;
    }
  return bool;
  }
}
