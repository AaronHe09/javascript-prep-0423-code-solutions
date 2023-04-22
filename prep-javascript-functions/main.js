function addTwoNumbers(num1,num2){
  return num1 + num2;
}
const addition = addTwoNumbers(1,2);
console.log(addition);

function convertHoursToMinutes(hours){
  return hours * 60;
}
const minutes = convertHoursToMinutes(3);
console.log(minutes);

function getGreeting(name){
  return "Hello " + name;
}
const greeting = getGreeting("Aaron");
console.log(greeting);

function addMultipleBy5(num1,num2){
  return (num1 + num2) * 5;
}
const multiple = addMultipleBy5(2,5);
console.log(multiple);

function multiplyAndDivideBy5(num1,num2){
  return(num1 * num2) / 5;
}
const divide = multiplyAndDivideBy5(5,5);
console.log(divide);

function subtractTwoNumbers(num1,num2){
  return num1 - num2;
}
const subtract = subtractTwoNumbers(6,2);
console.log(subtract);

function getCircleCircumference(radius){
  return 2 * 3.14 * radius;
}
const circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName){
  return firstName + " " + lastName;
}
const fullName = getFullName("Aaron", "He");
console.log(fullName);

function cube(number){
  return Math.pow(number, 3);
}
const cubed = cube(5);
console.log(cubed);
