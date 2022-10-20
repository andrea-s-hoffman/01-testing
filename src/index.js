// use this file for practice if you'd like

// run "node src/index.js to see the following in your terminal (use tabbing for file paths!)"
console.log("Hello Node");
console.log(1 + 1);
console.log(Math.PI);

const popcorn = () => {
  const students = [
    "Brandon",
    "Chico",
    "Deshawn",
    "Dominic",
    "Erica",
    "Jacob",
    "Jessica",
    "Jordan",
    "Josh D",
    "Josh H",
    "Michael",
  ];
  return students[Math.floor(Math.random() * students.length)];
};

console.log(popcorn());
