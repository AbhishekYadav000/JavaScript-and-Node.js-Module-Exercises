// Importing local modules
const student = require('./StudentInfo');
const Person = require('./Person');

// Using StudentInfo module
console.log("Student Name:", student.getName());
console.log("Campus:", student.Location());
console.log("Date of Birth:", student.dob);
console.log("Grade:", student.Studentgrade(65));

// Using Person module
const person1 = new Person("Jim", 25, "jim@example.com");
console.log("Person Info:", person1.getPersonInfo());




