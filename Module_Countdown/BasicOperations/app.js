const operations = require("./operations.js");

function printCalculation(operator, calculate) {
    console.log("9 " + operator + " 7 = " + calculate(9, 7));
}

printCalculation("+", operations.sum);
printCalculation("-", operations.difference);
printCalculation("*", operations.product);
printCalculation("/", operations.quotient);