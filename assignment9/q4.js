// 4. Square each number using map()
const numbers = [2, 4, 6, 8];
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers(numbers));
