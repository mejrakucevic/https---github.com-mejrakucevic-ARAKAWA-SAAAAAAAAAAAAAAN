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

Blog("Dog", "Breeds");
