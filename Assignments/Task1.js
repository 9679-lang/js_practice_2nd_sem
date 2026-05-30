//1 object with name + method using this
const user = {
    name :"John",
    greet(){
        console.log(`Hi! I'm ${this.name}`)
    }
};  
user.greet()

//Detached call
const fn = user.greet
//this is now window / undefined
fn()
console.log("this.name:",fn.call({})?.name??"undefined")

//fix with .bind()
const boundGreet = user.greet.bind(user); // permanently locks this
fn()         // broken
boundGreet();   // fixed

//share one method across two objects via.bind()
function introduce() {
  console.log(
    `I'm ${this.name}, age ${this.age}`
  );
}
const bob  = { name:"Bob",  age:30 };
const maya = { name:"Maya", age:25 };

const bobIntro  = introduce.bind(bob);
const mayaIntro = introduce.bind(maya);
bobIntro();
mayaIntro();

//In a real browser, inside a click handler
//this === the button element
const btn = {
  id: "submit-btn",
  handleClick() {
    console.log("clicked:", this.id);
  }
};

// Simulating addEventListener binding
btn.handleClick.call(btn);

// Arrow loses the element reference:
const arrow = () =>
  console.log("arrow this.id:",
    typeof this === "undefined"
      ? "undefined (strict)"
      : (this?.id ?? "no id"));
arrow.call(btn);

//strict mode
function strictFn() {
  "use strict";
  console.log("this:", this);
  console.log("type:", typeof this);
}
strictFn(); // undefined, not window

function looseFn() {
  // no strict mode
  console.log("loose this:",
    typeof this);
}
looseFn(); // object (globalThis)

//normal function vs arrow
const obj = {
  name: "Timer",

  normalFn: function() {
    // this = obj ✓
    console.log("normal:", this.name);
  },

  arrowFn: () => {
    // this = outer scope, NOT obj ✗
    console.log("arrow:",
      this?.name ?? "(no this.name)");
  }
};
obj.normalFn();
obj.arrowFn();

//nested object
const outer = {
  name: "Outer",
  inner: {
    name: "Inner",
    show() {
      // this = inner, not outer
      console.log("this.name:", this.name);
    },
    showArrow: () => {
      // arrow — this is enclosing scope
      console.log("arrow this.name:",
        this?.name ?? "(none)");
    }
  }
};
outer.inner.show();
outer.inner.showArrow();

//Borrow a method with .call()
const dog = {
  name: "Rex",
  sound: "Woof",
  speak() {
    console.log(
      `${this.name} says ${this.sound}`
    );
  }
};
const cat = { name: "Miso", sound: "Meow" };

// cat borrows dog's speak method
dog.speak.call(cat);

// with extra args: .call(this, a, b)
function greet(greeting, punc) {
  console.log(`${greeting}, ${this.name}${punc}`);
}
greet.call(cat, "Hello", "!");

//Borrow a method with .apply()
function describe(adj, emoji) {
  console.log(
    `${adj} ${this.name}: ${this.sound} ${emoji}`
  );
}
// .call  → args listed: (this, a, b)
describe.call(dog, "Good", "★");

// .apply → args as array: (this, [a,b])
const args = ["Cute", "♥"];
describe.apply(cat, args);

// spread equivalent of apply:
describe.call(cat, ...args);