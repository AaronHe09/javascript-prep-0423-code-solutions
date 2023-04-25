function whileLoop(){
  var array = [];
  var num = 0;
  while(array.length < 10){
    array.push(num);
    num += 1;
  }
  return array;
}
console.log(whileLoop());


function whileLoop2(){
  var array = [];
  var num = 0;
  while(array.length < 10){
    array.push(num);
    num += 2;
  }
  return array;
}
console.log(whileLoop2());


function forLoop1(){
  var array = [];
  for(let i = 0; i < 10; i++){
    array.push(i);
  }
  return array;
}
console.log(forLoop1());


function forLoop2(){
  for(let i = 100; i > 0; i--){
    console.log(`Time till explosion: ${i}`);
  }
}
forLoop2();


const object = {
    name: 'Ada LoveLace',
    age: 'classic',
    hobby: 'computation',
    invention: 'analytical engine'
}

function forInLoop1(){
  var array = [];
  for(const prop in object){
    array.push(prop);
  }
  return array;
}
console.log(forInLoop1());


function forInLoop2(){
  var array = [];
  for(const prop in object){
    array.push(object[prop])
  }
  return array;
}
console.log(forInLoop2());
