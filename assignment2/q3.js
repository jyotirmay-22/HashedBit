function findTax(salary) {
    let tax = 0;
    
    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.2;
            break;
        case (salary > 1500000):
            tax = salary * 0.3;
            break;
        default:
            return "Invalid salary input";
    }
    
    return tax;
}

// Example usage:
console.log(findTax(400000)); // 0
console.log(findTax(750000)); // 75000
console.log(findTax(1200000)); // 240000
console.log(findTax(2000000)); // 600000
