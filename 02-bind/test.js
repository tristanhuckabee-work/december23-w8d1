const Employee = require('./employee.js');

const babaYaga = new Employee('John Wick', 'Dog Lover');

setTimeout( babaYaga.sayName, 2000 );
// undefined says hello
setTimeout( babaYaga.sayName.bind(babaYaga), 2000 );
// John Wick says hello

setTimeout( babaYaga.sayOccupation, 3000);
// undefined is a undefined
setTimeout( babaYaga.sayOccupation.bind(babaYaga), 3000);
// John Wick is a Dog Lover