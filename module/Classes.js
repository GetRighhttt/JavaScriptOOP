/**
 * This is how we create classes in JavaScript.
 */

class Person {
  // initialized when class is first created.
  constructor(age, name, height, gender, lname) {
    this.age = age;
    this.name = name;
    this.height = height;
    this.gender = gender;
    this.lname = lname;
  }

  // Method to check is person is tall or not.
  isTall() {
    if (this.height > "6'0") {
      console.log(`${this.name} is tall!`);
    } else {
      console.log(`${this.name} is short!`);
    }
  }

  // Method to check if they are a man or woman.
  isMaleOrFemale() {
    if (this.gender === "Man") {
      console.log(`${this.name} is a man.`);
    } else {
      console.log(`${this.name} is a woman.`);
    }
  }

  /**
   * getter methods are used to get properties.
   *
   * setter methods are used to set properties.
   *
   * we can print the full name and pass the method into another method
   */

  get fullName() {
    return `${this.name} ${this.lname}`;
  }
  set firstName(name) {
    this.name = name;
  }
  // method to print out some properties.
  printObject() {
    return `${this.fullName} is ${this.age} years old, and is a ${this.gender}!`;
  }
}

/**
 * This is an example of inheritance:
 *
 * A professional athlete is still a person, so we can inherit the properties of the person
 * class to the ProAthlete class.
 *
 * We use the super keyword to pass in the values from the other classes.
 */

class ProAthlete extends Person {
  // initialized when class is first created.
  constructor(age, name, height, gender, lname, sport, position) {
    super(age, name, height, gender, lname);
    this.sport = sport;
    this.position = position;
  }

  determineSport() {
    switch (this.sport) {
      case "basketball":
        console.log( `${this.fullName}` + " plays basketball ");
        break;
      case "football":
        console.log( `${this.fullName}` + " plays football ");
        break;
      case "soccer":
        console.log( `${this.fullName}` + " plays soccer... =(, ");
        break;
      case "baseball":
        console.log( `${this.fullName}` + " plays baseball... =(, ");
        break;
    }
  }

  getPosition() {
    return `${this.position}`
  }
}

export {
  Person,
  ProAthlete
}
