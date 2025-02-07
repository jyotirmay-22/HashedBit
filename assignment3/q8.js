// Q8: Find repeated sum of digits until a single digit
function sumOfDigits(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}
console.log(sumOfDigits(456));
