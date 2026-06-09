// JavaScript Object Notation => JSON
// AI  comment
// JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse
// and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December
//  1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers
// of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make
// JSON an ideal data-interchange language.

const person = {
  name: "John",
  age: 30,
  city: "New York",
};
const jsonString = JSON.stringify(person);
// console.log(person); // Output: { name: 'John', age: 30, city: 'New York' }
// console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}

const jsonString2 = JSON.parse(jsonString);
// console.log(jsonString2); // Output: { name: 'John', age: 30, city: 'New York' }
console.log(person);
console.log(jsonString2);
