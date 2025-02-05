const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculate = () => {
    rl.question("Enter first number: ", (n1) => {
        rl.question("Enter second number: ", (n2) => {
            rl.question("Enter operation (add, subtract, multiply, divide): ", (operation) => {
                n1 = parseFloat(n1);
                n2 = parseFloat(n2);

                switch (operation) {
                    case 'add':
                        console.log(`Result: ${n1 + n2}`);
                        break;
                    case 'subtract':
                        console.log(`Result: ${n1 - n2}`);
                        break;
                    case 'multiply':
                        console.log(`Result: ${n1 * n2}`);
                        break;
                    case 'divide':
                        console.log(n2 !== 0 ? `Result: ${n1 / n2}` : 'Cannot divide by zero');
                        break;
                    default:
                        console.log('Invalid operation');
                }
                rl.close();
            });
        });
    });
};

calculate();
