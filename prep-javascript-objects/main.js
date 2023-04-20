const person = {
  firstName: 'Aaron',
  lastName: 'He',
  hobby: 'Sleeping',
  job: 'Frac Operator'
};
console.log(person);

const fullName = "The person's name is: " + person.firstName + " " + person.lastName;
console.log(fullName);

const job = "The person's current job is " + person.job;
console.log(job);

person["previousJob"] = "busser";
const prevJob = "The person's previous job is: " + person.previousJob;
console.log(prevJob);

console.log(person);
