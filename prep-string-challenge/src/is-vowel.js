/* exported isVowel */
const vowels = ["a", "e", "i", "o", "u"];

function isVowel(string){
  let bool = false;

 for(let i = 0; i < vowels.length; i++){
  if(vowels[i].toLowerCase() === string.toLowerCase()){
    return bool = true;
  }
  else{
    continue
  }

  if(bool = true){
    break;
  }
 }
  return bool;
}
