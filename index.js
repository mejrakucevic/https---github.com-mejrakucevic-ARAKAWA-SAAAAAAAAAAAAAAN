// let fn = "Mejra";
// let ln = "Kucevic";
// let age = prompt("Enter age");

// let result = `${fn} ${ln} is ${age} years old.`;

// alert(result);

// function Welcome(user = "Mystery person", msg = "thanks for vising us!") {
//   alert(`Welcome ${user}, ${msg}`);
// }

// Welcome("Mejra");

// normal function
function greeting(message) {
  return alert(`${message} everyone`);
}

// greeting("Good morning");

// arrow function
let greeting2 = (message) => alert(`${message} everyone`);

// greeting2("Good morning");

// arrow function w multiple statements

let Blog = (Title, Body) => {
  if (!Title) {
    throw new Error("Title is required");
  }

  if (!Body) {
    throw new Error("Body is required");
  }

  return alert(`${Title} - ${Body}`);
};

// Blog("Dog", "Breeds");

// arrow function nd this keyword

let tlou = {
  // adding properties
  characters: ["Joe", "Ellie"],

  // adding method
  printWDish: function () {
    setTimeout(() => console.log(this.characters.join(" - ")), 3000);
  },
};

// tlou.printWDish();

// destructuring objects
let ThingsToDo = {
  morning: "Exercise",
  afternoon: "Work",
  evening: "Code",
  night: ["Read", "Sleep"],
};

let { morning, evening } = ThingsToDo;

// console.log(morning, " - ", evening);

let uniStudent = ({ name, uni }) => {
  console.log(`${name} from ${uni}`);
};

uniStudent({
  name: "Mejra",
  uni: "UNINP",
});

var tlouCharacters = ["Joe", "Mike"];
var tlouCharacter = ["Ellie"];

var allTlouCharacters = [...tlouCharacters, ...tlouCharacter];
// console.log(allTlouCharacters);

var day = {
  breakfast: "Eggs",
  lunch: "Chicken",
};

var night = {
  dinner: "Salad",
};

var meals = { ...day, ...night };

// console.log(meals);

// super class
class Holiday {
  constructor(destination, days) {
    this.destination = destination;
    this.days = days;
  }
  info() {
    console.log(`${this.destination} will take ${this.days} days`);
  }
}

// sub class
class Expedition extends Holiday {
  constructor(destination, days, gear) {
    super(destination, days);
    this.gear = gear;
  }

  info() {
    super.info();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}

const tripWithGear = new Expedition("Everest", 30, [
  "Sunglasses",
  "Flags",
  "Camera",
]);

tripWithGear.info();
