/**
 * This is how we create classes in JavaScript.
 */

class Person {
  // initialized when class is first created.
  constructor(age, name, height, gender) {
    this.age = age;
    this.name = name;
    this.height = height;
    this.gender = gender;
  }

  // Method to check is person is tall or not.
  isTall() {
    if (this.height === "6'0") {
      console.log(`${this.name} is tall!`);
    } else {
      console.log(`${this.name} is short!`);
    }
  }

  // Method to check if they are a man or woman.
  isMaleOfFemale() {
    if (this.gender === "M") {
      console.log(`${this.name} is a man.`);
    } else {
      console.log(`${this.name} is a woman.`);
    }
  }

  // method to print out some properties.
  printObject() {
    return `${this.name} is ${this.age} years old, and is a ${this.gender}!`;
  }
}

export default Person;
