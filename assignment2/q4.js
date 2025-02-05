function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let sum = 0;
    
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }
    
    return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34)); // (6*4) + (0*3) = 24
console.log(sumOfProducts(123, 456)); // (3*6) + (2*5) + (1*4) = 18 + 10 + 4 = 32
console.log(sumOfProducts(98, 7)); // (8*7) = 56
console.log(sumOfProducts(9, 123)); // (9*3) = 27
