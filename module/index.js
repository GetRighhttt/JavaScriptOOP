import Person from "./Classes.js"; // importing class Person from Classes.js

/**
 * Now we will show how to create objects with classes in JS.
 */

// we used a constructor so we have to pass in some values. 
// new keyword used to create an instance of the class.
const stefan = new Person(27, "Stefan", "7'0", "Man");
const ayesha = new Person(36, "Ayesha", "5'0", "Woman");

console.log(stefan)

// Calling the methods from Classes.js to determine if stefan is tall and a man.
stefan.isMaleOrFemale()
stefan.isTall()
ayesha.isMaleOrFemale()
ayesha.isTall()


/**
Person { age: 27, name: 'Stefan', height: "7'0", gender: 'M' }
Stefan is a man.
Stefan is tall!
 */
console.log(stefan.printObject())
console.log(ayesha.printObject())