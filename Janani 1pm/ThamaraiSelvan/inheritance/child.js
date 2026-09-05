import  Parent  from "./parent.js";
class Child extends Parent{
  bike() {
    console.log("BMW Bike");
  }
}

const child = new Child();
child.bike()