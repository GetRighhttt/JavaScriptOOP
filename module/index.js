import { Person, ProAthlete } from "./Classes.js"; // importing class Person from Classes.js

/**
 * Now we will show how to create objects with classes in JS.
 */

/**
 * First we will declare our properties in the constructor we created in the Classes.js file.
 *
 * new keyword used to create an instance of the class.
 */
const stefan = new Person(27, "Stefan", "7'0", "Man", "Bayne");
const ayesha = new Person(36, "Lucky", "5'0", "Woman", "Whitely");

/**
 * Now we will use the objects we created to call on the methods we created.
 */
stefan.isMaleOrFemale();
stefan.isTall();
ayesha.isMaleOrFemale();
ayesha.isTall();
console.log(stefan.printObject());
console.log(ayesha.printObject());

/**
 Stefan is a man.
Stefan is tall!
Ayesha is a woman.
Ayesha is short!
Stefan Bayne is 27 years old, and is a Man!
Ayesha Whitely is 36 years old, and is a Woman!
 */

stefan.firstName = "Steven";
ayesha.firstName = "Alicia";

console.log(stefan.printObject());
console.log(ayesha.printObject());
/**
 Steven Bayne is 27 years old, and is a Man!
Alicia Whitely is 36 years old, and is a Woman!
*/

const stefanB = new ProAthlete(
  27,
  "Stefan",
  "6'1",
  "Man",
  "Bayne",
  "basketball",
  "Point Guard"
);

const ayeshaW = new ProAthlete(
  36,
  "Lucky",
  "5'0",
  "Woman",
  "Whitely",
  "soccer",
  "forward"
);

stefanB.determineSport();
ayeshaW.determineSport();
/**
 * Now we can use our proathlete objects with methods outlined in the person class.
 */
stefanB.isTall();
ayeshaW.isTall();

/**
 * Stefan is a man.
Stefan is tall!
Lucky is a woman.
Lucky is short!
Stefan Bayne is 27 years old, and is a Man!
Lucky Whitely is 36 years old, and is a Woman!
Steven Bayne is 27 years old, and is a Man!
Alicia Whitely is 36 years old, and is a Woman!
Stefan Bayne plays basketball 
Lucky Whitely plays soccer... =( 
Stefan is tall!
Lucky is short!
 */
