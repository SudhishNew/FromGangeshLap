class Demo {
  constructor() {
    console.log("this calling for automatically constructor");
  }
  study() {
    console.log("student is good");
  }
  teacher() {
    console.log("teacher is good");
  }
}

//variable refName = new className()
const d1 = new Demo(); // object creation for class
d1.study();
d1.teacher();
