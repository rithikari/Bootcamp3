const [num1, num2] = process.argv.slice(2).map(Number);
console.log(isNaN(num1) || isNaN(num2) ? "Please provide two valid numbers." : `Sum: ${num1 + num2}`);
