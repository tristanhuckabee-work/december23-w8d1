const Employee = require('./employee.js');

const jw = new Employee('John Wick', 'Dog Lover');
const {sayName, sayOccupation} = jw;


setTimeout(sayName.bind(jw), 2000);
setTimeout(sayOccupation.bind(jw), 3000);

// setTimeout(() => {
//   jw.sayName()
// }, 2000);
// setTimeout(() => {
//   jw.sayOccupation()
// }, 3000);

// setTimeout(sayName, 2000);
// setTimeout(sayOccupation, 3000);