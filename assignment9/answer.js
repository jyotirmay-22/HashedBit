// 1. Demonstrate let, const, and var scope
function scopeExample() {
    var a = "I am var"; // Function-scoped
    let b = "I am let"; // Block-scoped
    const c = "I am const"; // Block-scoped
    
    if (true) {
        var d = "var inside block";
        let e = "let inside block";
        const f = "const inside block";
        console.log(e, f); // Accessible here
    }
    
    console.log(a, b, c, d); // 'e' and 'f' are not accessible here
}
scopeExample();

// 2. Function to return second fruit
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
function getSecondFruit() {
    return fruits[1];
}
console.log(getSecondFruit());

// 3. Modify an array using push() and pop()
function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}
console.log(modifyArray([1, 2, 3]));

// 4. Square each number using map()
const numbers = [2, 4, 6, 8];
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers(numbers));

// 5. Filter out even numbers
function filterOdds(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterOdds([1, 2, 3, 4, 5, 6]));

// 6. Create a person object and log a greeting
const person = { name: "John", age: 30, occupation: "Engineer" };
function greetPerson(person) {
    console.log(`Hello, my name is ${person.name}, I am ${person.age} years old and I work as a ${person.occupation}.`);
}
greetPerson(person);

// 7. Calculate the area of a rectangle
function rectangleArea(rect) {
    return rect.width * rect.height;
}
console.log(rectangleArea({ width: 5, height: 10 }));

// 8. Get object keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys({ name: "Alice", age: 25, city: "New York" }));

// 9. Merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// 10. Sum of numbers using reduce()
const numArray = [10, 20, 30, 40];
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray(numArray));
