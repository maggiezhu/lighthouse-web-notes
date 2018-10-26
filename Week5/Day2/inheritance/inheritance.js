// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact,email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
  newmethod(){
    console.log('this is newmethod in person class');
  }
}


class Student extends Person {
  // stays in Student class since it's specific to students only
  newmethod(cohort) {
    console.log('method in person is overwitten');
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

student1 = new Student('JHope','hobi!!','email');
console.log(student1.email);
console.log(student1.name);
student1.newmethod();