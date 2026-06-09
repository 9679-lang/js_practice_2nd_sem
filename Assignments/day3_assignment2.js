// 1. Create an array colors with 5 color names and log the third element


const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

console.log("Third color:", colors[2]); // Green



// 2. Create an object book with properties title, author, pages, and publishedYear

const book = {
  title: "JavaScript Essentials",
  author: "John Doe",
  pages: 350,
  publishedYear: 2023
};

console.log("Book:", book);



// 3. Add a new property isRead: true to an existing book object immutably (return new object)


const updatedBook = {
  ...book,
  isRead: true
};

console.log("Original Book:", book);
console.log("Updated Book:", updatedBook);



// 4. Create an array of 3 objects, each representing a student with name and grade


const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B+" },
  { name: "Charlie", grade: "A-" }
];

console.log("Students:", students);



// 5. Create a nested object company with properties name, location, and employees (array of names)


const company = {
  name: "Tech Solutions",
  location: {
    city: "Pokhara",
    country: "Nepal"
  },
  employees: ["Dipak", "Sita", "Ram"]
};

console.log("Company:", company);



// 6. From an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably


const numbers = [10, 20, 30];

const increasedNumbers = numbers.map(num => num + 5);

console.log("Original Numbers:", numbers);
console.log("Increased Numbers:", increasedNumbers);



// 7. Create an object car and add a new property color immutably


const car = {
  brand: "Toyota",
  model: "Corolla"
};

const updatedCar = {
  ...car,
  color: "White"
};

console.log("Original Car:", car);
console.log("Updated Car:", updatedCar);



// 8. Create an array shoppingList and add a new item at the beginning immutably


const shoppingList = ["Milk", "Bread", "Eggs"];

const updatedShoppingList = ["Rice", ...shoppingList];

console.log("Original Shopping List:", shoppingList);
console.log("Updated Shopping List:", updatedShoppingList);



// 9. Create an object profile with nested address object containing city and country


const profile = {
  name: "Dipak",
  age: 26,
  address: {
    city: "Pokhara",
    country: "Nepal"
  }
};

console.log("Profile:", profile);



// 10. From an array of objects products, create a new array with only name and price properties


const products = [
  {
    id: 1,
    name: "Laptop",
    price: 80000,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Headphones",
    price: 5000,
    category: "Accessories"
  }
];

const simplifiedProducts = products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log("Original Products:", products);
console.log("Simplified Products:", simplifiedProducts);