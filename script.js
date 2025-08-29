// ==========================
// Part 1: Variables & Conditionals
// ==========================

// Declaring variables
let age = 20;          // storing age
let isStudent = true;  // boolean to indicate student status

// Using conditional statements to check conditions
if (age >= 18 && isStudent) {
  // If user is an adult student
  document.getElementById("part1-output").textContent = "You are an adult student.";
} else if (age >= 18) {
  // If user is an adult but not a student
  document.getElementById("part1-output").textContent = "You are an adult.";
} else {
  // If user is a minor
  document.getElementById("part1-output").textContent = "You are a minor.";
}

// ==========================
// Part 2: Custom Functions
// ==========================

// Function 1: Add two numbers and return result
function addNumbers(a, b) {
  return a + b; // return sum
}

// Function 2: Greet user with their name
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`; // return greeting string
}

// Call functions and show output
document.getElementById("part2-output").textContent = 
  `5 + 7 = ${addNumbers(5,7)} | ${greetUser("Abigail")}`;

// ==========================
// Part 3: Loops
// ==========================

// Loop example 1: Using for loop to add list items
const ul = document.getElementById("part3-list");
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li"); // create li element
  li.textContent = `Item ${i}`;            // add text
  ul.appendChild(li);                      // add li to ul
}

// Loop example 2: Using while loop to add more items
let count = 6;
while (count <= 8) {
  const li = document.createElement("li");
  li.textContent = `Item ${count}`;
  ul.appendChild(li);
  count++; // increase count to avoid infinite loop
}

// ==========================
// Part 4: DOM Interactions
// ==========================

// DOM Interaction 1: Change text when button is clicked
document.getElementById("change-text-btn").addEventListener("click", function() {
  document.getElementById("dom-output").textContent = "Text has been changed!";
});

// DOM Interaction 2: Toggle color of container on button click
document.getElementById("toggle-color-btn").addEventListener("click", function() {
  const container = document.getElementById("dom-container");
  // Change background color to yellow or lightblue
  container.style.backgroundColor = container.style.backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
  container.textContent = "Color toggled!";
});

// DOM Interaction 3: Create a paragraph dynamically
const newPara = document.createElement("p"); // create new p element
newPara.textContent = "This paragraph was created via JavaScript."; // add text
document.getElementById("dom-container").appendChild(newPara); // add it to the container
