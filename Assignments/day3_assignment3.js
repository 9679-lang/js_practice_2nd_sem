
// 1. Use map to double all numbers in [1, 2, 3, 4, 5]

const numbers1 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers1.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);
// Output: [2, 4, 6, 8, 10]



// 2. Use filter to get all even numbers from [1, 2, 3, 4, 5, 6]


const numbers2 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers2.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);
// Output: [2, 4, 6]



// 3. Use reduce to calculate the sum of [10, 20, 30, 40]


const numbers3 = [10, 20, 30, 40];

const sum = numbers3.reduce((total, current) => total + current, 0);

console.log("Sum:", sum);
// Output: 100



// 4. Use find to get the first object with age > 18


const users1 = [
  { name: "Ram", age: 15 },
  { name: "Sita", age: 20 },
  { name: "Hari", age: 25 }
];

const firstAdult = users1.find(user => user.age > 18);

console.log("First Adult:", firstAdult);
// Output: { name: "Sita", age: 20 }



// 5. Use forEach to log each element of ["apple", "banana", "orange"] with its index


const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});



// 6. Use map to extract only names from an array of user objects
const users2 = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 19 }
];

const names = users2.map(user => user.name);

console.log("Names:", names);
// Output: ["Alice", "Bob", "Charlie"]



// 7. Use filter to get products with price < 100


const products = [
  { name: "Pen", price: 20 },
  { name: "Notebook", price: 120 },
  { name: "Eraser", price: 15 },
  { name: "Bag", price: 500 }
];

const affordableProducts = products.filter(
  product => product.price < 100
);

console.log("Affordable Products:", affordableProducts);



// 8. Use reduce to find the maximum value in an array of numbers

const numbers4 = [15, 78, 32, 99, 45];

const maxValue = numbers4.reduce(
  (max, current) => (current > max ? current : max)
);

console.log("Maximum Value:", maxValue);
// Output: 99



// 9. Use map and filter together to get names of adults (age >= 18) in uppercase


const users3 = [
  { name: "Ram", age: 16 },
  { name: "Sita", age: 20 },
  { name: "Hari", age: 25 },
  { name: "Gita", age: 14 }
];

const adultNames = users3
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase());

console.log("Adult Names:", adultNames);
// Output: ["SITA", "HARI"]



// 10. Use forEach to build an HTML unordered list string from an array of items


const items = ["Laptop", "Mouse", "Keyboard"];

let htmlList = "<ul>";

items.forEach(item => {
  htmlList += `<li>${item}</li>`;
});

htmlList += "</ul>";

console.log("HTML List:");
console.log(htmlList);

