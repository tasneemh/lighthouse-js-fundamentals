const sayHello = function (name) {
  console.log("Hello, " + name);
};
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

const returnHelloToConsole = function (name) {
  return "Hello, " + name;
};
const greeting = returnHelloToConsole("John");
console.log(greeting);
